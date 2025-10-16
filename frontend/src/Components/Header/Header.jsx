import { Link } from "react-router-dom";
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
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">A Propos</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
