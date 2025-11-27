import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "../../Components/Carousel/Carousel";
import Collapse from "../../Components/Collapse/Collapse";
import redStar from "../../assets/redstar.png";
import greyStar from "../../assets/greystar.png";
import "./Logement.css";

function Logement() {
  // On récupère l'ID du logement depuis l'URL
  const { id } = useParams();

  // On prépare la fonction pour naviguer vers une autre page
  const navigate = useNavigate();

  // On crée une variable pour stocker les informations du logement
  // Au début, elle est vide (null) car on n'a pas encore récupéré les données
  const [logement, setLogement] = useState(null);

  // Cette fonction sépare le nom complet en prénom et nom
  // Exemple: "John Doe" devient firstName: "John", lastName: "Doe"
  function separerNomComplet(nomComplet) {
    const partiesDuNom = nomComplet.split(" ");
    const prenom = partiesDuNom[0];
    const nom = partiesDuNom[1] || ""; // Si pas de nom, on met une chaîne vide
    return { prenom, nom };
  }

  // Cette fonction crée un tableau de 5 éléments (true ou false) pour les étoiles
  // Exemple: si rating = 4, on obtient [true, true, true, true, false]
  function creerTableauEtoiles(note) {
    const tableauEtoiles = [];
    // On fait une boucle de 1 à 5 (5 étoiles au total)
    for (let numeroEtoile = 1; numeroEtoile <= 5; numeroEtoile++) {
      // Si le numéro de l'étoile est inférieur ou égal à la note, elle est pleine (true)
      // Sinon, elle est vide (false)
      const estEtoilePleine = numeroEtoile <= note;
      tableauEtoiles.push(estEtoilePleine);
    }
    return tableauEtoiles;
  }

  // Cette fonction récupère les données du logement depuis l'API
  async function chargerLogement(idDuLogement) {
    try {
      // On fait une requête pour récupérer les données
      const reponse = await fetch(
        `http://localhost:8080/api/properties/${idDuLogement}`
      );

      // On convertit la réponse en format JSON
      const donneesBrutes = await reponse.json();

      // On sépare le nom de l'hôte en prénom et nom
      const { prenom, nom } = separerNomComplet(donneesBrutes.host.name);

      // On crée le tableau d'étoiles à partir de la note
      const tableauEtoiles = creerTableauEtoiles(donneesBrutes.rating);

      // On prépare un nouvel objet avec toutes les informations formatées
      const logementFormate = {
        ...donneesBrutes, // On garde toutes les données originales
        firstName: prenom,
        lastName: nom,
        rateStar: tableauEtoiles,
      };

      // On met à jour notre variable d'état avec les données formatées
      setLogement(logementFormate);
    } catch (erreur) {
      // Si quelque chose ne va pas (erreur réseau, logement introuvable, etc.)
      console.error("Une erreur s'est produite :", erreur);
      // On redirige l'utilisateur vers la page d'erreur 404
      navigate("/404");
    }
  }

  // Cette fonction s'exécute quand le composant est monté ou quand l'ID change
  useEffect(() => {
    // Si on n'a pas d'ID, on redirige vers la page 404
    if (!id) {
      navigate("/404");
      return; // On arrête ici, pas besoin de continuer
    }

    // Sinon, on charge les données du logement
    chargerLogement(id);
  }, [id, navigate]);

  // Si on n'a pas encore les données, on affiche un message de chargement
  if (!logement) {
    return <div>Chargement...</div>;
  }

  // Maintenant qu'on a les données, on peut afficher la page complète
  return (
    <div className="logement-page">
      {/* On affiche le carousel avec toutes les photos du logement */}
      <Carousel pictures={logement.pictures} />

      {/* Section principale avec les informations du logement */}
      <div className="logement-header">
        {/* Partie gauche : titre, localisation et tags */}
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p className="location">{logement.location}</p>

          {/* On affiche tous les tags du logement */}
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Partie droite : informations de l'hôte et note avec étoiles */}
        <div className="logement-host-rating">
          {/* Informations de l'hôte */}
          <div className="host">
            <div className="host-name">
              <span>{logement.firstName}</span>
              <span>{logement.lastName}</span>
            </div>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>

          {/* Affichage des étoiles de notation */}
          <div className="rating">
            {logement.rateStar.map((estEtoilePleine, index) => {
              // Si l'étoile est pleine, on affiche l'étoile rouge, sinon l'étoile grise
              const imageEtoile = estEtoilePleine ? redStar : greyStar;
              const texteAlternatif = estEtoilePleine
                ? "Étoile pleine"
                : "Étoile vide";

              return (
                <img
                  key={`star-${index}`}
                  className="starPicture"
                  src={imageEtoile}
                  alt={texteAlternatif}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Section avec les collapses (Description et Équipements) */}
      <div className="logement-collapses">
        {/* Collapse pour la description */}
        <div className="collapse-wrapper">
          <Collapse
            title="Description"
            content={<p>{logement.description}</p>}
          />
        </div>

        {/* Collapse pour les équipements */}
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
