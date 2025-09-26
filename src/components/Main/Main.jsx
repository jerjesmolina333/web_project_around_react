import { useState, useContext, useEffect } from "react";
import Popup from "../Main/components/Popup/Popup";
import EditAvatar from "../Main/components/Popup/EditAvatar/EditAvatar";
import EditProfile from "./components/Popup/EditProfile/EditProfile";
import Card from "../Main/components/Card/Card";
import NewCard from "./components/Popup/NewCard/NewCard";
import api from "../../utils/Api";

import {
  CurrentUserContext,
  currentUser,
} from "../../../src/contexts/CurrentUserContext";

export default function Main(props) {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function updateUser() {
      const updatedUser = await api.getUserInfo();
      setCurrentUser(updatedUser);
    }
    updateUser();
  }, []);

  useEffect(() => {
    async function getCards() {
      const cardsList = await api.getImagesList();
      setCards(cardsList);
    }
    getCards();
  }, []);

  async function onCardDelete(cID) {
    await api
      .handleCardDelete(cID)
      .then(() => {
        setCards(cards.filter((card) => card._id !== cID));
      })
      .catch((error) => console.error(error));
  }

  const editProfilePopup = {
    title: "Editar perfil",
    children: (
      <EditProfile
        handleUpdateUser={props.handleUpdateUser}
        handleClosePopup={props.onClosePopup}
      />
    ),
  };

  const handleAddPlaceSubmit = (data) => {
    (async () => {
      debugger;
      await api.insertaImagen(data).then((newData) => {
        debugger;
        const nuevosDatos = [newData, ...cards];
        setCards(nuevosDatos);
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
      <main className="page">
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
              <button
                className="profile__boton-edit"
                aria-label="Editar perfil"
              >
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
        <ul className="cards__container">
          {cards?.map((card) => (
            <Card
              name={card.name}
              link={card.link}
              clave={card._id}
              key={card._id}
              isLiked={card.isLiked}
              onCardDelete={onCardDelete}
              setCards={setCards}
              onClose={props.onClosePopup}
            />
          ))}
        </ul>

        {props.popup && (
          <Popup onClose={props.onClosePopup} title={props.popup.title}>
            {props.popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}
