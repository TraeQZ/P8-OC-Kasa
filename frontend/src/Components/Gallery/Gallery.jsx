import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./Gallery.css";

//Hooks, useState une boite pour stocker les données
//useEffect execute le code quand le composant se charge
function Gallery() {
  const [properties, setProperties] = useState([]);
  //properties est la variable qui contiendra la liste des logements
  //setProperties est la fonction pour mettre à jour cette liste
  useEffect(() => {
    //useEffect hook permet de communiquer avec une API,BDD..
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Erreur :", err));
  }, []);

  return (
    <div className="properties-grid">
      {/* map = boucle qui crée une Card pour chaque logement */}
      {properties.map((property) => (
        <Card
          key={property.id} // Identifiant unique (obligatoire pour React) Permet à React de savoir quel élément a changé
          id={property.id}
          title={property.title}
          cover={property.cover}
        />
      ))}
      {/*map fonction de tableau ici utilisé pour transformer les données en jsx*/}
    </div>
  );
}

export default Gallery;
