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
1. On reçoit 3 props : id, title, cover
2. <Link to={`/logement/${id}`}> crée un lien vers /logement/c67ab8a7
3. Quand on clique, on va sur la page Logement avec cet ID
4. ${} = template literal (injecter une variable dans du texte)
*/
