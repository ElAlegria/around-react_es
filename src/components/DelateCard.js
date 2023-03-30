import React from "react";
import PopupWithForm from "./PopupWithForm";

function delateCardPopup(props) {
  const { onClose, eraseDelate } = props;

  function handleSubmit(e) {
    e.preventDefault();

    eraseDelate(props.card);
  }
  return (
    <PopupWithForm
    name="delete_card"
    title="¿Estás seguro?"
    action="Si"
    onSubmit={handleSubmit}
    onCLose={onClose}
    ></PopupWithForm>
  );
}

export default delateCardPopup;
