function EditAvatar() {
  return (
    <>
      <section className="popup popup_image_profile ">
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
    </>
  );
}

export default EditAvatar
