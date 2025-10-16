import { useEffect, useState } from "react";
import "./Gallery.css";
//Hooks, useState une boite pour stocker les données
//useEffect execute le code quand le composant se charge
function Gallery() {
  const [properties, setProperties] = useState([]);
  //properties est la variable qui contiendra la liste des logements
  //setProperties est la fonctionpour mettre à jour cette liste
  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Erreur :", err));
  }, []);

  return (
    <div className="properties-grid">
      {properties.map((property) => (
        //map fonction de tableau ici utilisé pour transformer les données en jsx
        <div key={property.id} className="property-card">
          {/* key outil pour que la virtuelle dom sache quel element correspond à
        quel autre quand on fait la màj */}
          <img src={property.cover} alt={property.title} />
          <h2>{property.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
