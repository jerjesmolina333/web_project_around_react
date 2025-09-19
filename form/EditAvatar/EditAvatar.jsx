import React from "react";

import { useContext } from "react";

import {
  CurrentUserContext,
  currentUser,
} from "../../src/contexts/CurrentUserContext";

export default function EditAvatar() {
  // suscribirse a CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);

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
          placeholder={currentUser?.avatar}
          required
        />
        <span className="popup__input_type_error nombre-error"></span>
      </label>

      <button className="popup__button form__submit_inactive" type="submit">
        Guardar
      </button>
    </form>
  );
}
