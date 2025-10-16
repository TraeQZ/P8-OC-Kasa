import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Gallery from "../../Components/Gallery/Gallery";
import Footer from "../../Components/Footer/Footer";
import About from "../../Pages/About/About";

import "./Home.css";

function Home() {
  return (
    <div className="layout-main">
      {/* 1. Header et Footer sont pleines largeurs, car en dehors de .grid-main */}

      {/* 2. La Banner doit aussi être pleine largeur si l'image doit s'étendre */}
      <Banner title="Chez vous, partout et ailleurs" />

      {/* 3. Le conteneur .grid-main ne contient que la Gallery et les futurs éléments limités */}
      <div className="grid-main">
        {/* <Banner /> (DEPLACEE HORS D'ICI) */}
        <Gallery />
      </div>
    </div>
  );
}

export default Home;
