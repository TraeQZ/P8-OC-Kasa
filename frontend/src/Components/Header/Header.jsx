import { NavLink  } from "react-router-dom";
import "./Header.css";
import KasaLogo from "../../assets/.LOGO.png";
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img src={KasaLogo} alt="Kasa Logo" />
        <nav>
          <ul className="header-nav">
            <li>
  <NavLink
    to="/"
    className={({ isActive }) => (isActive ? "active" : "")}
  >
    Accueil
  </NavLink>
</li>

<li>
  <NavLink
    to="/about"
    className={({ isActive }) => (isActive ? "active" : "")}
  >
    A Propos
  </NavLink>
</li>

          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
