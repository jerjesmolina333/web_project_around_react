import { useState, useEffect } from "react";
import Header from "../../Header/Header.jsx";
import Profile from "../../Profile/Profile.jsx";
import Main from "../Main.jsx";
import Footer from "../../Footer/Footer.jsx";
import api from "../../src/utils/Api.js";
import NewCard from "../../form/NewCard/NewCard.jsx";
import Popup from "../../Main/components/Popup/Popup.jsx";
// import "./App.css";

import { CurrentUserContext } from "../../src/contexts/CurrentUserContext.js";

function App() {
  const [count, setCount] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);
  // Manejo de imágenes:
  const [imagePopup, setImagePopup] = useState(null);

  async function handleCardDelete(cID) {
    await api
      .handleCardDelete(cID)
      .then(() => {
        setCards(cards.filter((card) => card._id !== cID));
      })
      .catch((error) => console.error(error));
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup(popup) {
    setPopup(null);
  }

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

  const handleUpdateUser = (data) => {
    (async () => {
      await api._actualizaUsuario(data).then((newData) => {
        setCurrentUser(newData);
      });
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      await api._actualizaAvatar(data).then((newData) => {
        setCurrentUser(newData);
      });
    })();
  };

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Profile
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            handleUpdateUser={handleUpdateUser}
            handleUpdateAvatar={handleUpdateAvatar}
            setCards={setCards}
            cards={cards}
            popup={popup}
          />
          <Main
            cards={cards}
            setCards={setCards}
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            handleOpenPopup={handleOpenPopup}
            handleCardDelete={handleCardDelete}
            popup={popup}
          />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
