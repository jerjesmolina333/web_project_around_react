import { useState } from "react";
import ImagePopup from "./ImagePopup";
import Trash from "../../../images/Trash.svg";
import imgLike from "../../../images/Like.png";

export default function Card(props) {
  // debugger;
  const { name, link, clave, key } = props;
  // handleOpenPopup = handleOpenPopup;
  const imageComponent = { title: "", clave, children: null };
  const [imagePopup, setOpenImagePopup] = useState(null);

  function handleOpenImagePopup(imagePopup) {
    setOpenImagePopup(imagePopup);
  }

  return (
    <>
      <li key={key} className="card__container">
        <img className="card__trash" src={Trash} alt="Trash icon" />
        <img
          className="card__pic"
          src={link}
          alt=""
          onClick={() => handleOpenImagePopup(imageComponent)}
        />

        <div className="card__group">
          <h2 className="card__name">{name}</h2>
          <img className="card__like" src={imgLike} alt="Imagen like" />
        </div>
      </li>
      {imagePopup && (
        <ImagePopup
          onClose={handleCloseImagePopup}
          link={imagePopup.link}
        ></ImagePopup>
      )}
    </>
  );
}
