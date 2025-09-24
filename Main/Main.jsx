import { useState, useEffect, useContext } from "react";
import Popup from "../Main/components/Popup/Popup";
import EditAvatar from "../form/EditAvatar/EditAvatar";
import Card from "../src/components/Main/Card";

export default function Main(props) {
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };

  return (
    <>
      <main>
        <ul className="cards__container">
          {props.cards.map((card) => (
            <Card
              name={card.name}
              link={card.link}
              clave={card._id}
              key={card._id}
              isLiked={card.isLiked}
              onCardDelete={props.handleCardDelete}
              setCards={props.setCards}
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
