import React, { useState } from "react";
import { api } from "./ultis/Api.js";
import { CurrentUserContext } from "./contexts/CurrentUserContext.js";
import Header from "./components/header/header.js";
import Main from "./components/main.js";
import Footer from "./components/footer.js";
import Popup from "./components/popup.js";
import ImagePopup from "./components/imagePopup.js";
import EditProfilePopup from "./components/editProfilePopup.js";
import EditAvatarPopup from "./components/EditAvatarPopup.js";
import Card from "./components/card.js";
import AddPlacePopup from "./components/addPlacePopup.js"; 
// import delateCard from "./components/delateCard.js";
function App() {
  //?Profile
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [userName, setUserName] = React.useState("");
  const [userAbout, setUserAbout] = React.useState("");
  // const [] = React.useState("");

  //?cards
  const [cards, setCard] = React.useState([]);
  const [selectedCard, setSelectedCard] = useState({});
  const [eraseCardAsk, setEraseCardAsk] = useState(false);
  const [imagePic, setImagePic] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [newPlaceTitle, setNewPlaceTitle] = React.useState("");
  const [newPlaceLink, setNewPlaceLink] = React.useState("");


  const renderCard = () =>
    cards.map((item) => {
      const { _id, owner, link, name, likes } = item;
      return (
        <Card
          key={_id}
          cardId={_id}
          cardOwnerId={owner._id}
          link={link}
          cardName={name}
          cardLikes={likes}
          onCardClick={handleClickCard}
          onCardDelate={handleDelateCard}
          onCardLike={() => {
            handleCardLike(item);
          }}
        />
      );
    });
  React.useEffect(() => {
    api.getUserInfo().then((info) => {
      setCurrentUser(info);
      setUserName(info.name);
      setUserAbout(info.about);
    });
  }, []);

  React.useEffect(() => {
    api.getCardList().then((cards) => {
      setCard(cards);
    });
  }, []);

  //! function Card
  function handleAddPlaceSubmit (data){
    api.handleAddCard(data).then((newCard)=>([newCard,...cards]))
    ClosePopups()
  }
function handleNewPlaceTitleChance(e){
  setNewPlaceTitle(e.target.value)
}
function handleNewPlaceLinkChance(e){
  setNewPlaceLink(e.target.value)
}

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    if (!isLiked) {
      api.addLike(card._id, !isLiked).then((newCard) => {
        setCard((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    } else {
      api.removeLike(card._id).then((newCard) => {
        setCard((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      });
    }
  }

  function handleDelateCard(card) {
    api.removeCard(card.cardId).then(() => {
      function dontDeleteCard(item) {
        return item._id !== card.cardId;
      }
      const newCardArray = cards.filter(dontDeleteCard);
      setCard(newCardArray);
    });
  }

  //!Profile
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleUpdateUser(data) {
    api.setUserInfo(data).then(() => {
      api.getUserInfo().then((info) => {
        setCurrentUser(info);
        setUserName(info.name);
        setUserAbout(info.about);
      });
    });
    ClosePopups();
  }

  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }

  function handleUserAboutChange(e) {
    setUserAbout(e.target.value);
  }

  //!Edit avatar
  function handleUpdateAvatar(avatar) {
    api.handleChangeAvatar(avatar)
    .then((data) => {
      setCurrentUser(data)
    })
    .catch((err) => console.error(err));
    ClosePopups();
  }

  //!Card
  function handleClickCard(card) {
    setSelectedCard(card);
    setImagePic(true);
  }
  function handleEraseAsk(card) {
    setEraseCardAsk(true);
    setSelectedCard(card);
  }

  function ClosePopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setEraseCardAsk(false);
    setSelectedCard("");
    setImagePic(false);
  }
  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditAvatarPopupOpen={handleEditAvatarClick}
          onEditProfilePopupOpen={handleEditProfileClick}
          onAddPlacePopupOpen={handleAddPlaceClick}
          onCardClick={handleClickCard}
          onDeleteAsk={handleEraseAsk}
          rendererCard={renderCard}
        />
        <Footer />
        <Popup isOpen={isEditProfilePopupOpen}>
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onCLose={ClosePopups}
            onUpdateUser={handleUpdateUser}
            onUserNameChange={handleUserNameChange}
            userDescriptionChange={handleUserAboutChange}
            setUserName={setUserName}
            setUserAbout={setUserAbout}
            name={userName}
            about={userAbout}
          />
        </Popup>

        <Popup isOpen={isAddPlacePopupOpen}>
          <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onCLose={ClosePopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
          onNewPlaceTitleChange={handleNewPlaceTitleChance}
          onNewPlaceLinkChange={handleNewPlaceLinkChance}
          setNewPlaceTitle={setNewPlaceTitle}
          setNewPlaceLink={setNewPlaceLink}
          newPlaceTitle={newPlaceTitle}
          newPlaceLink={newPlaceLink}
          />
        </Popup>

        <Popup isOpen={isEditAvatarPopupOpen}>
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onCLose={ClosePopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
        </Popup>

        <Popup isOpen={imagePic}>
          <ImagePopup
            cardInfo={selectedCard}
            isOpen={imagePic}
            onClose={ClosePopups}
          />
        </Popup>
        {/* <Popup isOpen={eraseCardAsk}>
          <PopupWithForm
            name="delete_card"
            title="¿Estás seguro?"
            action="Si"
            onCLose={ClosePopups}
          ></PopupWithForm>
        </Popup> */}
        {/* <Popup isOpen={eraseCardAsk}>
          <delateCard />
        </Popup> */}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
