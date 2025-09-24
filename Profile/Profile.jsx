import React from "react";
import { useState, useContext } from "react";
import avImage from "../images/JackesCusteau.jpg";
import Popup from "../Main/components/Popup/Popup";
import EditProfile from "../form/EditProfile/EditProfile";
import EditAvatar from "../form/EditAvatar/EditAvatar";
import NewCard from "../form/NewCard/NewCard";
import api from "../src/utils/Api";

import {
  CurrentUserContext,
  currentUser,
} from "../src/contexts/CurrentUserContext";

function Profile(props) {
  const [popup, setPopup] = useState(null);

  const editProfilePopup = {
    title: "Editar perfil",
    children: (
      <EditProfile
        handleUpdateUser={props.handleUpdateUser}
        handleClosePopup={props.onClosePopup}
      />
    ),
  };

  const currentUser = useContext(CurrentUserContext);

  const handleAddPlaceSubmit = (data) => {
    (async () => {
      await api._insertaImagen(data).then((newData) => {
        props.setCards([newData, ...props.cards]);
      });
    })();
  };

  const newCardPopup = {
    title: "Nuevo lugar",
    children: (
      <NewCard
        handleClosePopup={props.onClosePopup}
        handleAddPlaceSubmit={handleAddPlaceSubmit}
      />
    ),
  };

  const editAvatarPopup = {
    title: "Editar avatar",
    children: (
      <EditAvatar
        handleUpdateAvatar={props.handleUpdateAvatar}
        handleClosePopup={props.onClosePopup}
      />
    ),
  };

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
            onClick={() => props.onOpenPopup(editAvatarPopup)}
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
                onClick={() => props.onOpenPopup(editProfilePopup)}
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
            onClick={() => props.onOpenPopup(newCardPopup)}
          />
        </button>
      </div>
      {props.popup && (
        <Popup onClose={props.onClosePopup} title={props.popup.title}>
          {props.popup.children}
        </Popup>
      )}
    </>
  );
}

export default Profile;
