import { useEffect, useState } from "react";
import Banner from "../../Components/Banner/Banner";
import Gallery from "../../Components/Gallery/Gallery";
import Card from "../../Components/Card/Card";

import About from "../../Pages/About/About";

import "./Home.css";

function Home() {
  return (
    <div className="layout-main">
      <Banner title="Chez vous, partout et ailleurs" />
      <div className="grid-main">
        <Gallery />
      </div>
    </div>
  );
}

export default Home;
