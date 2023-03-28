import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const {
    onEditProfilePopupOpen,
    onEditAvatarPopupOpen,
    onAddPlacePopupOpen,
    rendererCard
  } = props;

  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__container">
          <div
            className="profile__avatar-wrapper"
            onClick={onEditAvatarPopupOpen}
          >
            <img
              src={currentUser.avatar}
              alt="Profile Pic"
              className="profile__image"
            />
            <div className="profile__avatar-overlay"></div>
          </div>
          <div className="profile__information">
            <div className="profile__wrap">
              <h1 className="profile__user">{currentUser.name}</h1>
              <button
                type="button"
                className="profile__edit-button"
                aria-label="edit profile button"
                onClick={onEditProfilePopupOpen}
              ></button>
            </div>
            <p className="profile__profession">{currentUser.about}</p>
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
        <div className="cards__container" >{rendererCard()}</div>
      </section>
    </main>
  );
}
//{renderCard()}
export default Main;
