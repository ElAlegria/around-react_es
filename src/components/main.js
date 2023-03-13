import imageProfile from "../images/imageprofile-pic.jpg";

function Main(props) {
  const {
    onEditProfilePopupOpen,
    onEditAvatarPopupOpen,
    onAddPlacePopupOpen,
    // onCardClick
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
              src={imageProfile}
              alt="Profile Pic"
              className="profile__image"
            />
            <div className="profile__avatar-overlay"></div>
          </div>
          <div className="profile__information">
            <div className="profile__wrap">
              <h1 className="profile__user">Jacques Cousteau</h1>
              <button
                type="button"
                className="profile__edit-button"
                aria-label="edit profile button"
                onClick={onEditProfilePopupOpen}
              ></button>
            </div>
            <p className="profile__profession">Explorador</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="add button"
          onClick={onAddPlacePopupOpen}
        ></button>
      </section>

      {/* <section className="cards">
          <ul className="cards__container"></ul>
        </section>  
    */}
    </main>
  );
}

export default Main;
