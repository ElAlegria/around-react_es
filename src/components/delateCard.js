import React from "react";
import PopupWithForm from "./popupWhithForm";
function delateCard(props) {
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
      inputs={[]}
      onCLose={onClose}
    />
  );
}

export default delateCard;
