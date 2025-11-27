import { useState } from "react";
import "./Collapse.css";
import arrow from "../../assets/Vector.png";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
        <span className="collapse-title">{title}</span>
        <img
          src={arrow}
          alt=""
          className={`collapse-arrow ${isOpen ? "open" : ""}`}
          aria-hidden="true"
        />
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}

export default Collapse;
