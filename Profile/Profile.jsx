import React from "react";
import avImage from "../images/JackesCusteau.jpg";
import { useContext } from "react";

import {
  CurrentUserContext,
  currentUser,
} from "../src/contexts/CurrentUserContext";

function Profile() {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <div className="profile">
        <div className="profile__container-imgs">
          <img
            src={currentUser?.avatar}
            className="profile__photo"
            alt="User photo"
          />
          <img
            src="../images/Icono_ed_avatar.png"
            className="profile__img-edit-avatar"
          />
        </div>

        <div className="profile__name-container">
          <div className="contNombre">
            <p className="profile__name">{currentUser?.name}</p>
            <button className="profile__boton-edit" aria-label="Editar perfil">
              <img
                src="../images/EditButton.png"
                className="profile__edit-image"
                alt="Edit Button"
              />
            </button>
          </div>
          <p className="profile__profession">{currentUser?.about}</p>
        </div>

        <button className="profile__boton-plus" aria-label="Agrega imagen">
          <img
            src="../images/AddButton.png"
            className="profile__plus"
            alt="Add button"
          />
        </button>
      </div>
    </>
  );
}

export default Profile;
