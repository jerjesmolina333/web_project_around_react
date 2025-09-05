import { useState } from "react";
import NewCard from "../form/NewCard/NewCard";
import Popup from "../Main/components/Popup/Popup";
import EditProfile from "../form/EditProfile/EditProfile";
import EditAvatar from "../form/EditAvatar/EditAvatar";

export default function Main() {
  const [popup, setPopup] = useState(null);
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
        <button
          aria-label="Agregar carta"
          //   className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(newCardPopup)}
        />

        <button
          aria-label="Editar perfil"
          //   className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(editProfilePopup)}
        />

        <button
          aria-label="Cambiar imagen"
          //   className="profile__add-button"
          type="button"
          onClick={() => handleOpenPopup(editAvatarPopup)}
        />

        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}
