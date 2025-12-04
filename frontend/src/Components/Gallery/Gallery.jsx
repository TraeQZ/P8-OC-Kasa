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
      {/* map = boucle qui crée une Card pour chaque logement 
      la méthode .map() utilisée sur le tableau properties. 
      Pour chaque objet dans ce tableau (property), 
      elle retourne un nouvel élément d'interface utilisateur : le composant <Card>.*/}
      {properties.map((property) => (
        <Card
          key={property.id} // Identifiant unique (obligatoire pour React) Permet à React de savoir quel élément a changé
          id={property.id}
          title={property.title}
          cover={property.cover}
        />
      ))}
    </div>
  );
}

export default Gallery;
