import "./Footer.css";
import logoFooter from "../../assets/LOGO.png";
function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Logo Kasa" className="logoFooter" />
      <p className="textFooter">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
