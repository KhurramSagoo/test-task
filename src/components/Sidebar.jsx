import React, { useState } from "react"; // Ensure useState is imported
import logo from "../assets/logo-white.png";
import icon1 from "../assets/icons/Vector.svg";
import icon2 from "../assets/icons/clipboard-check.svg";
import icon3 from "../assets/icons/compass.svg";
import icon4 from "../assets/icons/ecology-book.svg";
import icon5 from "../assets/icons/elevator.svg";
import icon6 from "../assets/icons/golf.svg";
import image from "../assets/image.png";
import google from "../assets/google.png";
import star from "../assets/icons/star.png";
import "./sidebar.css";

const Sidebar = () => {
  const [selectedIndex, setSelectedIndex] = useState(2);
  const [hoveredStar, setHoveredStar] = useState(3);

  const handleMouseEnter = (index) => {
    setHoveredStar(index);
  };

  const handleMouseLeave = () => {
    setHoveredStar(null);
  };

  // Array to store list data with icons, titles, and descriptions
  const listData = [
    {
      icon: icon1,
      title: "Immobilienlexikon",
      badge: "KI",
      description: "Immobilienwissen für alle Fälle.",
    },
    {
      icon: icon2,
      title: "Preisschätzung",
      badge: "LINK",
      description: "Den Wert Ihres Hauses schätzen lassen.",
    },
    {
      icon: icon3,
      title: "Checklisten",
      badge: "PDF",
      description: "Praktische Checklisten für jeden Schritt.",
      highlight: true,
    },
    {
      icon: icon4,
      title: "Ratgeber",
      badge: "PDF",
      description: "Immobilien-Expertenrat für Eigentümer.",
    },
    {
      icon: icon5,
      title: "Mandatsnavigator",
      badge: "KI",
      description: "Verständlich zum Verkaufsabschluss.",
    },
    {
      icon: icon6,
      title: "Wohntraumfinder",
      badge: "KI",
      description: "Zum Traumheim mit KI-Unterstützung.",
    },
  ];

  return (
    <div className="sidebar">
      {/* Logo and Night Mode */}
      <div className="logo-container">
        <button className="night-mode-btn">NACHTMODUS</button>
        <div className="logo">
          <img src={logo} alt="ImmoTrust Schweiz AG Logo" />
        </div>
      </div>

      {/* Navigation List */}
      <ul className="nav-list">
        {listData.map((item, index) => (
          <div
            key={index}
            className={`navigation-div ${
              selectedIndex === index ? "selected" : ""
            }`}
            onClick={() => setSelectedIndex(index)}
          >
            <div className="nav-item">
              <div className=" icon-heading">
                <img
                  src={item.icon}
                  alt={`${item.title} icon`}
                  className={`${
                    selectedIndex === index ? "selectedIcon" : "icons"
                  }`}
                />
                {item.title}
              </div>
              <span className="badge">{item.badge}</span>
            </div>
            <p
              className={`${
                selectedIndex === index
                  ? "selected-description"
                  : "notSelected-description"
              }`}
            >
              {item.description}
            </p>
          </div>
        ))}
      </ul>

      {/* Bottom Section */}
      <div className="bottom-section">
        <div className="profile-card">
          <img src={image} alt="Profile" className="profile-image" />
          <h3 className="bottom-heading">Immotrust AG</h3>
          <p className=" bottom-detail">
            Vertrauensvolle Immobilienberatung seit 2008.
          </p>
          <button className="contact-btn">Carlos Kuk – Eigentümer</button>
        </div>
      </div>

      <div className="rating-div">
        <div className="rating-upper">
          <img src={google} alt="" className="rating-logo" />
          <p className="rating-detail">Bewertungen</p>
          <div className="star-div">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`star ${
                  hoveredStar >= index ? "filled" : "unfilled"
                }`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img src={star} alt="" className="star-image" />
              </div>
            ))}
          </div>
        </div>
        <p className="review">4,6 von 5 BASIEREND AUF 245 BEWERTUNGEN</p>
      </div>
      {/* <div className="ratings-div">
        <div className="rating-uppper">
          <img src={google} alt="" className=" ratting-logo" />
          <p className=" ratting-detail">Bewertungen</p>
          <div className="start-div">
            <div className="stars">
              <img src="../assets/icons/star.png" alt="" className="star" />
            </div>
          </div>
        </div>
        <p className="rating-detail">4,6 von 5 BASIEREND AUF 245 BEWERTUNGEN</p>
      </div> */}
    </div>
  );
};

export default Sidebar;
