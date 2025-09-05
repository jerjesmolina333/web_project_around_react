export default function EditAvatar() {
  return (
    <form
      className="popup__formEdImg"
      name="EA-form"
      id="editar-avatar"
      method="post"
      noValidate
    >
      <label className="popup__field">
        <input
          type="text"
          className="popup__input popup__input_type_card-name"
          maxLength="200"
          minLength="2"
          id="link"
          placeholder="Liga a la foto"
          required
        />
        <span class="popup__input_type_error nombre-error"></span>
      </label>

      <button className="popup__button form__submit_inactive" type="submit">
        Guardar
      </button>
    </form>
  );
}
