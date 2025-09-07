export default function NewCard() {
  return (
    <>
      <form
        className="popup__form"
        name="card-form"
        id="nuevo-lugar"
        method="post"
        noValidate
      >
        <label className="popup__field">
          <input
            type="text"
            className="popup__input"
            id="np-title"
            placeholder="Título"
            minlength="2"
            maxlength="30"
            required
          />
          <span className="popup__input_type_error np-title-error"></span>
        </label>
        <label className="popup__field">
          <input
            type="url"
            className="popup__input popup__input_type_url"
            id="card-link"
            name="link"
            minlength="2"
            maxlength="200"
            placeholder="Enlace a la imagen"
            required
          />
          <span
            className="popup__input_type_error np-image-error"
            id="card-link-error"
          ></span>
        </label>

        <button className="popup__button form__submit_inactive" type="submit">
          Crear
        </button>
      </form>
    </>
  );
}
