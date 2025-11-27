import arrow from "../../assets/Vector.png";
// components/Carousel/Carousel.jsx
import { useState } from "react";
import "./Carousel.css";

function Carousel({ pictures }) {
  // pictures est le   tableau de photos

  const [currentIndex, setCurrentIndex] = useState(0);
  // currentIndex = quelle photo on regarde (0 = première photo)

  // Fonction pour aller à la photo suivante
  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % pictures.length);
  };

  // Fonction pour aller à la photo précédente
  const prevImage = () => {
    setCurrentIndex((currentIndex - 1 + pictures.length) % pictures.length);
  };

  // Si il n'y a qu'UNE seule photo, pas besoin de flèches !
  const showArrows = pictures.length > 1;

  return (
    <div className="carousel">
      {showArrows && (
        <button className="carousel-arrow left" onClick={prevImage}>
          ❮
        </button>
      )}

      <img src={pictures[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

      {showArrows && (
        <button className="carousel-arrow right" onClick={nextImage}>
          ❯
        </button>
      )}

      {showArrows && (
        <div className="carousel-counter">
          {currentIndex + 1} / {pictures.length}
        </div>
      )}
    </div>
  );
}

export default Carousel;
