function EditAvatar() {
  return (
    <div>
      <section className="popup popup_image_profile">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-button"
            aria-label="close button"
          ></button>
          <h3 className="popup__title">Cambiar foto de Perfil</h3>
          <form
            className="popup__form popup__form_type_profile-image"
            action="#"
            name="image"
            novalidate
          >
            <label className="popup__field" for="popup-input-image">
              <input
                type="url"
                name="image-link"
                placeholder="Imagen URL"
                id="popup-input-image"
                className="popup__input"
                value
                required
              />
              <span className="popup__error popup-input-image-error">
                Introduce una dirección web.
              </span>
            </label>
            <button
              type="submit"
              className="popup__button popup__button_type_profile-image"
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
