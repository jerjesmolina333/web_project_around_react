import { useState, useEffect } from "react";
import NewCard from "../form/NewCard/NewCard";
import Popup from "../Main/components/Popup/Popup";
import EditProfile from "../form/EditProfile/EditProfile";
import EditAvatar from "../form/EditAvatar/EditAvatar";
import Card from "../src/components/Main/Card";
import api from "../src/utils/Api.js";

export default function Main({ cards }) {
  // suscribirse a CurrentUserContext
  // const currentUser = React.useContext(CurrentUserContext);

  const [popup, setPopup] = useState(null);
  const [imagePopup, setImagePopup] = useState(null);
  const newCardPopup = { title: "Nuevo lugar", children: <NewCard /> };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup(popup) {
    setPopup(null);
  }

  return (
    <>
      <main>
        <ul className="cards__container">
          {cards.map((card) => (
            <Card
              name={card.name}
              link={card.link}
              clave={card._id}
              key={card.id}
            />
          ))}
        </ul>
        <button
          className="popup__button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
          Nueva Carta
        </button>
        <button
          className="popup__button"
          type="button"
          onClick={() => handleOpenPopup(editProfilePopup)}
        >
          Editar Perfil
        </button>
        <button
          className="popup__button"
          type="button"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        >
          Editar avatar
        </button>

        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}
