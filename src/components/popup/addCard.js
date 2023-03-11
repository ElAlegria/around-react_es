function AddCard() {
  return (
    <div>
      <section className="popup popup_add_card">
        <div className="popup__container">
          <button
            type="button"
            className="popup__close-button popup__card-close-button"
            aria-label="close button"
          ></button>
          <h3 className="popup__title">Nuevo Lugar</h3>
          <form
            className="popup__form popup__form_type_add-image"
            action="#"
            name="place"
            id="form-card"
            novalidate
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
                value
                required
              />
              <span className="popup__error popup-input-link-error">
                Por favor, introduce una dirección web.
              </span>
            </label>
            <button
              type="submit"
              className="popup__button popup__create-card-button"
              aria-label="create button"
              data-textcontent="Crear"
            >
              Crear
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
