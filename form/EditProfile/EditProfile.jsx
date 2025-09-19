import React from "react";

import { useContext } from "react";

import {
  CurrentUserContext,
  currentUser,
} from "../../src/contexts/CurrentUserContext";

export default function EditProfile() {
  // suscribirse a CurrentUserContext
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <form
      className="popup__form"
      name="EP-form"
      id="editar-perfil"
      method="post"
      noValidate
    >
      <label className="popup__field">
        <input
          type="text"
          className="popup__input popup__input_type_card-name"
          maxLength="40"
          minLength="2"
          id="nombre"
          placeholder={currentUser?.name}
          required
        />
        <span className="popup__input_type_error nombre-error"></span>
      </label>
      <label className="popup__field">
        <input
          className="popup__input"
          type="text"
          class="popup__input"
          id="acerca"
          placeholder={currentUser?.about}
          minLength="2"
          maxLength="200"
          required
        />
        <span
          className="popup__input_type_error acerca-error"
          id="card-link-error"
        ></span>
      </label>

      <button className="popup__button form__submit_inactive" type="submit">
        Guardar
      </button>
    </form>
  );
}
