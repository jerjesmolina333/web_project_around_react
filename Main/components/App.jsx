import { useState, useEffect } from "react";
import Header from "../../Header/Header.jsx";
import Profile from "../../Profile/Profile.jsx";
import Main from "../Main.jsx";
import Footer from "../../Footer/Footer.jsx";
import api from "../../src/utils/Api.js";
// import "./App.css";

import { CurrentUserContext } from "../../src/contexts/CurrentUserContext.js";

function App() {
  const [count, setCount] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

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

  return (
    <>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Profile />
          <Main cards={cards} />
          <Footer />
        </CurrentUserContext.Provider>
      </div>
    </>
  );
}

export default App;
