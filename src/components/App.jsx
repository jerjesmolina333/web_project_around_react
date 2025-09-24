import { useState, useEffect } from "react";
import Header from "../components/Header/Header.jsx";
import Main from "../components/Main/Main.jsx";
import Footer from "../components/Footer/Footer.jsx";
import api from "../../src/utils/Api.js";
// import NewCard from "../../form/NewCard/NewCard.jsx";
// import Popup from "./Main/Popup/Popup.jsx";

import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function App() {
  // const [count, setCount] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  // const [cards, setCards] = useState([]);

  const [popup, setPopup] = useState(null);
  // Manejo de imágenes:
  const [imagePopup, setImagePopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup(popup) {
    setPopup(null);
  }

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
          <Main
            onOpenPopup={handleOpenPopup}
            handleUpdateUser={handleUpdateUser}
            handleUpdateAvatar={handleUpdateAvatar}
            onClosePopup={handleClosePopup}
            handleOpenPopup={handleOpenPopup}
            popup={popup}
          />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
