import React from "react";
import { api } from "../ultis/Api";
import Card from "./card";

function Main(props) {
  const [userName, setUsername] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [card, setCard] = React.useState([]);

  const {
    onEditProfilePopupOpen,
    onEditAvatarPopupOpen,
    onAddPlacePopupOpen,
    onCardClick,
    onDeleteAsk,
  } = props;

  React.useEffect(() => {
    api.getUserInfo().then((info) => {
      setUsername(info.name);
      setUserDescription(info.about);
      setUserAvatar(info.avatar);
    });
  });

  React.useEffect(() => {
    api.getCardList().then((cards) => {
      setCard(cards);
    });
  }, []);

  const renderCard = () =>
  card.map((item) => {
    const { _id, owner, link, name, likes } = item;
    // console.log(item)
    return (
      <Card
        key={_id}
        cardId={_id}
        cardOwnerId={owner._id}
        link={link}
        cardName={name}
        cardLikes={likes}
        onCardClick={onCardClick}
        onDeleteCardAsk={onDeleteAsk}
      />
    );
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div
            className="profile__avatar-wrapper"
            onClick={onEditAvatarPopupOpen}
          >
            <img
              src={userAvatar}
              alt="Profile Pic"
              className="profile__image"
              style={{ backgroundImage: `url(${userAvatar})` }}
            />
            <div className="profile__avatar-overlay"></div>
          </div>
          <div className="profile__information">
            <div className="profile__wrap">
              <h1 className="profile__user">{userName}</h1>
              <button
                type="button"
                className="profile__edit-button"
                aria-label="edit profile button"
                onClick={onEditProfilePopupOpen}
              ></button>
            </div>
            <p className="profile__profession">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="add button"
          onClick={onAddPlacePopupOpen}
        ></button>
      </section>

      <section className="cards">
        <div className="cards__container">{renderCard()}</div>
      </section>
    </main>
  );
}

export default Main;
