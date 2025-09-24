import btnCerrar from "../../../images/BotonCerrar.png";

export default function ImagePopup(props) {
  const { onClose, link } = props;
  function cierraVentanaBoton() {
    debugger;
    props.onCloseImg();
  }
  return (
    <div className="modal-overlay">
      <img
        className="popup__cerrarIMG"
        src={btnCerrar}
        alt="Imagen botón cerrar"
        onClick={() => onClose()}
      />

      <img src={link} className="imagen__pic" alt="Imagen por desplegar" />
    </div>
  );
}
