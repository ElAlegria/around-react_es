function DelateCard() {
  return (
    <>
      <section class="popup popup_delete_card">
        <div class="popup__container">
          <button
            type="button"
            class="popup__close-button popup__delete-close-button"
            aria-label="close button"
          ></button>
          <h3 class="popup__title">¿Estás seguro?</h3>
          <form class="popup__form" action="#" name="delete" novalidate>
            <button
              type="submit"
              class="popup__button popup__button_type_delete"
              aria-label="delete button"
              data-textcontent="Sí"
            >
              Sí
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
