import { useState } from "react";
import ImagePopup from "./ImagePopup";

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
      <li key={key} className="card">
        <img
          className="card__image"
          src={link}
          alt=""
          onClick={() => handleOpenImagePopup(imageComponent)}
        />
        {/* <button
          aria-label="Delete card"
          className="card__delete-button"
          type="button"
        /> */}
        <button>Borrar carta</button>
        <div className="card__description">
          <h2 className="card__title">{name}</h2>
          {/* <button
            aria-label="Like card"
            type="button"
            className="card__like-button"
          /> */}
          <button className="botonLikeCarta">Like</button>
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
