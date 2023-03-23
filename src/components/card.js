import React from "react";
function Card(props) {
  const {
    // cardOwnerId,
    // onCardClick,
    // onCardDelete,
    link,
    cardName,
    cardLikes,
    onCardLike,
    onDeleteCardAsk,
  } = props;

  function handleClickCard() {
    props.onCardClick(props);
  }

  return (
    <div className="card animation__join-back">
      <button
        type="button"
        className="card__delete-button "
        aria-label="trash"
        onClick={onDeleteCardAsk}
      ></button>
      <img
        className="card__image"
        src={link}
        alt={cardName}
        onClick={handleClickCard}
      />
      <div className="card__information animation__join-left">
        <h2 className="card__title">{cardName}</h2>
        <div className="card__like-container">
          <button
            type="button"
            className="card__like-button"
            aria-label="Like button"
            onClick={onCardLike}
          ></button>
          <p className="card__like-counter">{cardLikes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
