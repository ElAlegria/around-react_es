function ImagePopup(props) {
  const { cardInfo, onClose } = props;
  return (
    <div className="popup__container popup__container_role-image">
      <figure className="popup__figure">
        <img
          src={cardInfo.link}
          alt={cardInfo.cardName}
          className="popup__image"
        />
        <figcaption className="popup__caption">{cardInfo.cardName}</figcaption>
      </figure>
      <button
        type="button"
        className="popup__close-button popup__preview-close-button"
        aria-label="close button"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default ImagePopup;
