import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../../Components/Carousel/Carousel";
import Collapse from "../../Components/Collapse/Collapse";
import redStar from "../../assets/redstar.png";
import greyStar from "../../assets/greystar.png";
import "./Logement.css";

function Logement() {
  const { id } = useParams(); // useParams() récupère les paramètres de l'URL
  const navigate = useNavigate();
  const [logement, setLogement] = useState(null); // State pour stocker le logement trouvé

  useEffect(() => {
    if (!id) {
      //si l'id est falsy, alors navigate to 404
      navigate("/404");
      return;
    }

    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Séparer prénom et nom
        const names = data.host.name.split(" ");
        data.firstName = names[0];
        data.lastName = names[1];

        // Créer le tableau d'étoiles
        data.rateStar = [];
        for (let i = 1; i <= 5; i++) {
          data.rateStar.push(i <= data.rating);
        }

        setLogement(data);
      })
      .catch((err) => {
        console.error("Erreur :", err);
        navigate("/404");
      });
  }, [id, navigate]);

  if (!logement) return <div>Chargement...</div>;

  return (
    <div className="logement-page">
      {/* Le Carousel */}
      <Carousel pictures={logement.pictures} />

      {/* Conteneur pour les infos principales */}
      <div className="logement-header">
        {/* Partie gauche */}
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>

          {/* Les tags */}
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Partie droite */}
        <div className="logement-host-rating">
          {/* Info de l'hôte */}
          <div className="host">
            <div className="host-name">
              <span>{logement.firstName}</span>
              <span>{logement.lastName}</span>
            </div>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>

          {/* Les étoiles */}
          <div className="rating">
            {logement.rateStar.map((stars, index) => (
              <img
                key={`star-${index}`}
                className="starPicture"
                src={stars ? redStar : greyStar}
                alt={stars ? "Étoile pleine" : "Étoile vide"}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Les Collapse */}
      <div className="logement-collapses">
        <div className="collapse-wrapper">
          <Collapse
            title="Description"
            content={<p>{logement.description}</p>}
          />
        </div>

        <div className="collapse-wrapper">
          <Collapse
            title="Équipements"
            content={
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Logement;
