import { useState } from "react";
import ImagePopup from "./ImagePopup";
import Trash from "../../../images/Trash.svg";
import imgLike from "../../../images/Like.png";

export default function Card(props) {
  const { name, link, key, handleOpenPopup } = props;
  const imageComponent = { title: "", link, children: null };
  const [imagePopup, setOpenImagePopup] = useState(null);

  function handleOpenImagePopup(imagePopup) {
    setOpenImagePopup(imagePopup);
  }

  function handleCloseImagePopup(imagePopup) {
    setOpenImagePopup(null);
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
          {/* <button
            aria-label="Like card"
            type="button"
            className="card__like-button"
          /> */}
          <button className="card__like">
            <img src={imgLike} alt="Imagen like" />
          </button>
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
