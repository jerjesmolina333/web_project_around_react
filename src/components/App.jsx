import { useState } from "react";
import Header from "../../Header/Header";
import Profile from "../../Profile/Profile";
import Footer from "../../Footer/Footer.jsx";
// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class="page">
        <Header />
        <Profile />

        <div class="elements"></div>

        <Footer />
      </div>
    </>
  );
}

export default App;
