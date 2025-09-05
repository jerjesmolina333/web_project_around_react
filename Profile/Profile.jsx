import avImage from "../images/JackesCusteau.jpg";

function Profile() {
  return (
    <div class="profile">
      <div class="profile__container-imgs">
        <img src={avImage} class="profile__photo" alt="User photo" />
        <img
          src="../images/Icono_ed_avatar.png"
          class="profile__img-edit-avatar"
        />
      </div>

      <div class="profile__name-container">
        <div class="contNombre">
          <p class="profile__name">Jackes Cousteau</p>
          <button class="profile__boton-edit" aria-label="Editar perfil">
            <img
              src="../images/EditButton.png"
              class="profile__edit-image"
              alt="Edit Button"
            />
          </button>
        </div>
        <p class="profile__profession"></p>
      </div>

      <button class="profile__boton-plus" aria-label="Agrega imagen">
        <img
          src="../images/AddButton.png"
          class="profile__plus"
          alt="Add button"
        />
      </button>
    </div>
  );
}

export default Profile;
