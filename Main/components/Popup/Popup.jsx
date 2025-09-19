import btnCerrar from "../../../images/BotonCerrar.png";

export default function Popup(props) {
  // se ha desestructurado onClose de props
  //los hijos son el contenido de la ventana emergente
  const { onClose, title, children } = props;

  return (
    <>
      <div className="modal-overlay">
        <div className="popup__container">
          <button onClick={onClose}>
            <img
              className="popup__cerrar"
              src={btnCerrar}
              alt="Imagen botón cerrar"
            />
          </button>
          <div className={`${title ? "popup__heading" : ""}`}>
            <h3 className="popup__heading">{title}</h3>

            {children}
          </div>
        </div>
      </div>
    </>
  );
}
