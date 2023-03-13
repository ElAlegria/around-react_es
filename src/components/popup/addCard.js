function AddCard() {
  return (
    <>
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
    </>
  );
}

export default AddCard
