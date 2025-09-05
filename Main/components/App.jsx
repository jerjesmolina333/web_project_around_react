import { useState } from "react";
import Header from "../../Header/Header.jsx";
import Profile from "../../Profile/Profile.jsx";
import Main from "../Main.jsx";
import Footer from "../../Footer/Footer.jsx";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="page">
        <Header />
        <Profile />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
