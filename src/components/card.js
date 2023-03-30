import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import heartWhite from '../images/heart-image-white.png'

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);
  
  const { cardOwnerId, link, cardName, cardLikes, onCardLike } =
    props;
  const isOwn = cardOwnerId === currentUser._id;
  const isLiked = cardLikes.some((i) => i._id === currentUser._id);

  function handleClickCard() {
    props.onCardClick(props);
  }
  function handleDelateCard() {
    props.onCardDelate(props)
  }

  
  return (
    <div className="card animation__join-up">
      <button
        type="button"
        className={`card__delete-button ${
          isOwn ? "card__delete-button_active" : ""
        }`}
        aria-label="trash"
        onClick={handleDelateCard}
      ></button>
      <img
        className="card__image"
        src={link}
        alt={cardName}
        onClick={handleClickCard}
      />
      <img 
      className={ `card__like ${isLiked ? 'card__like_on':''}`}
      src={heartWhite}
      alt={'heart like'}
      />
      <div className="card__information animation__join-left">
        <h2 className="card__title">{cardName}</h2>
        <div className="card__like-container">
          <button
            type="button"
            className={`card__like-button ${
              isLiked ? "card__like-button_on" : ""
            }`}
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
