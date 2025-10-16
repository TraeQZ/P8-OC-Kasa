import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import "./About.css";
import AboutBannerImage from "../../assets/LOGO.png";
function About() {
  return (
    <div className="layout-main">
      <div className="grid-main">
        <div>
          <Banner>
            <img
              src={AboutBannerImage}
              alt="chaine de montagnes enneigée"
              className="bannerImg"
            />
          </Banner>
        </div>
      </div>
    </div>
  );
}
export default About;
