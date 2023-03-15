import React from "react";
import Footer from "./components/footer.js";
import Header from "./components/header/header.js";
import Main from "./components/main.js";
import Popup from "./components/popup.js";
import Card from "./components/card.js";

import PopupWithForm from "./components/popupWhithForm.js";
import ImagePopup from "./components/imagePopup.js";
function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  // const [isDelateCardOpen, setIsDelateCardOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState("");
  const [eraseCardAsk, setEraseCardAsk] = React.useState(false);
  const [imagePic, setImagePic] = React.useState(false);


  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  function handleClickCard(card) {
    setSelectedCard(card);
    setImagePic(true)
  }
  function handleEraseAsk() {
    setEraseCardAsk(true);
  }
  // function handleTrashCardClick() {
  //   setIsDelateCardOpen(true);
  // }
  function ClosePopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    // setIsDelateCardOpen(false);
    setEraseCardAsk(false)
    setSelectedCard('')
    setImagePic(false)
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatarPopupOpen={handleEditAvatarClick}
        onEditProfilePopupOpen={handleEditProfileClick}
        onAddPlacePopupOpen={handleAddPlaceClick}
        onCardClick={handleClickCard}
        onDelateAsk={handleEraseAsk}
      />
      <Footer />
      <Popup isOpen={isEditProfilePopupOpen}>
        <PopupWithForm
          name="Edit__profile"
          title="Edit Profile"
          action="Save"
          onCLose={ClosePopups}
        >
          <label className="popup__field" for="popup-input-name">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              id="popup-input-name"
              className="popup__input popup__input_type_name"
              minLength="2"
              maxLength="40"
              required
            />
            <span className="popup__error popup-input-name-error">
              Por favor, rellena este campo.
            </span>
          </label>
          <label className="popup__field" for="popup-input-about">
            <input
              type="text"
              name="about"
              placeholder="Ocupación"
              id="popup-input-about"
              className="popup__input popup__input_type_about"
              minLength="2"
              maxLength="200"
              required
            />
            <span className="popup__error popup-input-about-error">
              Por favor, rellena este campo.
            </span>
          </label>
        </PopupWithForm>
      </Popup>
      <Popup isOpen={isAddPlacePopupOpen}>
        <PopupWithForm
          name="add_card"
          title="Nuevo lugar"
          action="Save"
          onCLose={ClosePopups}
        >
          <label className="popup__field" for="popup-input-title">
            <input
              type="text"
              name="title"
              placeholder="Titulo"
              id="popup-input-title"
              className="popup__input"
              minlength="2"
              maxLength="30"
              required
            />
            <span className="popup__error popup-input-title-error">
              Por favor, rellena este campo.
            </span>
          </label>
          <label className="popup__field" for="popup-input-link">
            <input
              type="url"
              name="image-link"
              placeholder="Imagen URL"
              id="popup-input-link"
              className="popup__input"
              required
            />
            <span className="popup__error popup-input-link-error">
              Por favor, introduce una dirección web.
            </span>
          </label>
        </PopupWithForm>
      </Popup>
      <Popup isOpen={isEditAvatarPopupOpen}>
        <PopupWithForm
          name="image_profile"
          title="Cambiar foto de perfil"
          action="Save"
          onCLose={ClosePopups}
        >
          <label className="popup__field" for="popup-input-image">
            <input
              type="url"
              name="image-link"
              placeholder="Imagen URL"
              id="popup-input-image"
              className="popup__input"
              required
            />
            <span className="popup__error popup-input-image-error">
              Introduce una dirección web.
            </span>
          </label>
        </PopupWithForm>
      </Popup>
      <Popup isOpen={imagePic}>
        <ImagePopup 
        cardInfo ={selectedCard}
        onClose={ClosePopups}
        />
      </Popup>

      <Popup isOpen={eraseCardAsk}>
        <PopupWithForm
          name="delete_card"
          title="¿Estás seguro?"
          action="Si"
          isCLose={ClosePopups}
        ></PopupWithForm>
      </Popup>
    </div>
  );
}

export default App;
