import bannerImage from "../../assets/IMG.png";
import "./Banner.css";

function Banner({ title, image }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${image || bannerImage})` }}
    >
      <div className="banner-inner">
        {title && <h1 className="banner-title">
            chez vous,<br className="mobile-break" /> partout et ailleurs
          </h1>}
      </div>
    </div>
  );
}

export default Banner;
