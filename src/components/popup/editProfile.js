function EditProfile() {
  return (
    <div>
      <section className="popup popup_edit_profile">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-button"
            aria-label="close button"
          ></button>
          <h3 className="popup__title">Editar Perfil</h3>
          <form
            className="popup__form popup__form_type_edit"
            action="#"
            name="edit"
            novalidate
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
            <button
              type="submit"
              className="popup__button popup__button_type_edit"
              aria-label="save button"
              data-textcontent="Guardar"
            >
              Guardar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default EditProfile;
