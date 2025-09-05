import logo from "../images/Logo.png";

function Header() {
  return (
    <header class="header">
      <img src={logo} className="logo header__logo" alt="Logo" />
      <div class="header__line"></div>
    </header>
  );
}

export default Header;
