function EditProfile() {
  return (
    <>
        <div className="popup__container popup_edit_profile">
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
    </>
  );
}

export default EditProfile;
