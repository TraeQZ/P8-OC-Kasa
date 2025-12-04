import "./Card.css";
import { Link } from "react-router-dom";

// Props = données reçues du parent (Gallery)
function Card({ id, title, cover }) {
  return (
    <Link to={`/Logement/${id}`} className="card">
      {/*permet de coller la valeur de la prop id à la fin du chemin statique
      /Logement/*/}
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </Link>
  );
}
export default Card;
/* 
4. ${} = permet de calculer et d'insérer la valeur de la prop id directement dans l'URL.
*/
