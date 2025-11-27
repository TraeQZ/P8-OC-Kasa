import Errormsg from "../../assets/404.png";
import "./Error.css";

function Error404() {
  return (
    <div className="error">
      <img src={Errormsg} alt="404 Error" />
      <p className="txt-404">Oups ! La page que vous demandez n'existe pas.</p>
      <a className="lien-404" href="/">
        Retourner sur la page d'accueil
      </a>
    </div>
  );
}

export default Error404;
