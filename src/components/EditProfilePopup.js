import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext)
  const { onUpdateUser, onUserNameChange, userDescriptionChange, name, about } =
    props;

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: name,
      about: about,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onCLose={props.onCLose}
      onSubmit={handleSubmit}
      name="Edit__profile"
      title="Edit Profile"
      action="Save"
    >
      <label className="popup__field" htmlFor="popup-input-name">
        <input
          type="text"
          name="name"
          placeholder={currentUser.name}
          id="popup-input-name"
          className="popup__input popup__input_type_name"
          minLength="2"
          maxLength="40"
          onChange={onUserNameChange}
          value={name || ''}
          required
        />
        <span className="popup__error popup-input-name-error">
          Por favor, rellena este campo.
        </span>
      </label>
      <label className="popup__field" htmlFor="popup-input-about">
        <input
          type="text"
          name="about"
          placeholder={currentUser.about}
          id="popup-input-about"
          className="popup__input popup__input_type_about"
          minLength="2"
          maxLength="200"
          onChange={userDescriptionChange}
          value={about || ''}
          required
        />
        <span className="popup__error popup-input-about-error">
          Por favor, rellena este campo.
        </span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
