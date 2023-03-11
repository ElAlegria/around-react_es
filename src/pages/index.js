import {
  selectors,
  openFormProfile,
  formEdit,
  formImage,
  formProfileImage,
  profileTitle,
  profileProfession,
  profileImage,
  openCardButton,
  addCardSubmitButton,
  deleteCardSubmitButton,
  editProfileSubmitButton,
  profileImageSubmitButton,
  profileImageOverlay,
  handleDeleteClick,
  handleLikRemove,
  handleLikAdd,
  api
} from "../components/utils.js";
import Card from "../components/cards.js";
// import FormValidator from '../components/formValidators.js';
import PopupWithForm from "../components/popupWithForm.js";
import PopupDeleteImage from "../components/popupDeleteImages.js";
import PopupWithImage from "../components/popupWithImage.js";
import Section from "../components/sections.js";
import UserInfo from "../components/userInfos.js";
import Api from "../components/Api.js";
import FormValidator from "../components/formValidators";


//! no borrar hasta que quede ajustado el form validator
const profilePopupValidator = new FormValidator(formEdit, selectors);
const imagePopupValidator = new FormValidator(formImage, selectors);
const profileImagePopupValidator = new FormValidator(
  formProfileImage,
  selectors
);

profilePopupValidator.enableValidation();
imagePopupValidator.enableValidation();
profileImagePopupValidator.enableValidation();

export const previewPopup = new PopupWithImage(".popup_preview_image");
previewPopup.setEventListeners();

const editPopup = new PopupWithForm({
  popupSelector: ".popup_edit_profile",
  handleFormSubmit: (data) => {
    api
      .setUserInfo({ name: data.name, about: data.about })
      .then((response) => {
        profileUser.setUserInfo({
          username: response.name,
          userocupation: response.about,
        });

        editPopup.close();
      })
      .catch((err) => console.log(err));
  },
  submitButton: editProfileSubmitButton,
});

editPopup.setEventListeners();

export const profileUser = new UserInfo({
  userName: profileTitle,
  userOcupation: profileProfession,
  userAvatar: profileImage,
});

openFormProfile.addEventListener("click", () => {
  editPopup.open();
  profilePopupValidator.resetValidation();
});

api
  .getUserInfo()
  .then((res) => {
    profileUser.setUserInfo({ username: res.name, userocupation: res.about });
    profileUser.setUserAvatar(res.avatar);
    profileUser.userId = res._id;
  })
  .then(() => {
    api
      .getCardList()
      .then((res) => {
        const cardSection = new Section(
          {
            items: res,
            renderer: (data) => {
              const cardElement = createCard(data);
              cardSection.addCards(cardElement);
            },
          },
          ".cards__container"
        );
        cardSection.renderer();

        const addCardPopup = new PopupWithForm({
          popupSelector: ".popup_add_card",
          handleFormSubmit: (data) => {
            api
              .addCard({ name: data.title, link: data["image-link"] })
              .then((data) => {
                const newCardElement = createCard(data);
                cardSection.addItem(newCardElement);
                addCardPopup.close();
              })
              .catch((err) => console.log(err));
          },
          submitButton: addCardSubmitButton,
        });

        addCardPopup.setEventListeners();

        openCardButton.addEventListener("click", () => {
          addCardPopup.open();
          imagePopupValidator.resetValidation();
        });
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

const profileImagePopup = new PopupWithForm({
  popupSelector: ".popup_image_profile",
  handleFormSubmit: (data) => {
    const avatar = data["image-link"];
    api
      .setUserAvatar(avatar)
      .then(() => {
        profileUser.setUserAvatar(avatar);
        profileImagePopup.close();
      })
      .catch((err) => console.log(err));
  },
  submitButton: profileImageSubmitButton,
});

profileImagePopup.setEventListeners();

profileImageOverlay.addEventListener("click", () => {
  profileImagePopup.open();
  profileImagePopupValidator.resetValidation();
});

const deleteCardPopup = new PopupDeleteImage({
  popupSelector: ".popup_delete_card",
  submitButton: deleteCardSubmitButton,
});

deleteCardPopup.setEventListeners();

function createCard(data) {
  const newCard = new Card(
    {
      data,
      handleCardClick: ({ name, link }) => {
        previewPopup.open({ name, link });
      },
      handleDeleteClick: ({id}) => {
        handleDeleteClick(id, newCard,deleteCardPopup);
        deleteCardPopup
      },
      handleLikeAdd: ({id}) => {
        handleLikAdd(id,newCard);
      },
      handleLikeDelete: ({ id }) => {
       handleLikRemove(id,newCard)
      },
      userId: profileUser.userId,
    },
    ".card-template"
  );
  return newCard.generateCard();
}



