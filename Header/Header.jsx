import logo from "../images/Logo.png";

function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo header__logo" alt="Logo" />
      <div className="header__line"></div>
    </header>
  );
}

export default Header;
