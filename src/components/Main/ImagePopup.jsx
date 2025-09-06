export default function ImagePopup(props) {
  const { onClose, link } = props;

  return (
    <div class="imagen__container" id="imagen__container">
      {/* <button
        aria-label="Close modal"
        className="popup__close"
        type="button"
        onClick={onClose} // llama a onClose al hacer clic en el botón
      /> */}
      <div>
        <button className="popup__close" onClick={onClose}>
          Cerrar Modal
        </button>
      </div>

      <img src={link} class="imagen__pic" alt="Imagen por desplegar" />
    </div>
  );
}
