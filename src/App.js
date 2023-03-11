import AppHeader from "./components/header/header.js";
function App() {
  return (
    <div className="page">
      <AppHeader />
       <main className="content">
       <section className="profile">
        <div className="profile__container">
          <div className="profile__avatar-wrapper">
            <img
              src="<%=require('./images/imageprofile-pic.jpg')%>"
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
              ></button>
            </div>
            <p className="profile__profession">Explorador</p>
          </div>
        </div>
        <button
          type="button"
          className="profile__add-button"
          aria-label="add button"
        ></button>
      </section>
        {/* <section className="cards">
          <ul className="cards__container"></ul>
        </section>

      
        <section class="popup popup_preview_image">
          <div class="popup__container popup__container_role-image">
            <figure class="popup__figure">
              <img src=" " alt="#" class="popup__image" />
              <figcaption class="popup__caption"></figcaption>
            </figure>
            <button
              type="button"
              class="popup__close-button popup__preview-close-button"
              aria-label="close button"
            ></button>
          </div>
        </section>*/} 
      </main>
      <footer className="footer">
        <p className="footer__copyright">&copy; Alrededor de los EEUU</p>
      </footer> 
    </div>
  );
}

export default App;
