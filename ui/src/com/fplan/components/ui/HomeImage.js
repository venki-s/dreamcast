import React from "react";

import HomeImage from "../../components/images/header/movie_icon.png";
import "./HomeImage.css";

export default function homeImage() {
  return (
    <div className="HomeImage">
      <div className="Images">
        <img src={HomeImage} alt="HomeImage" />
      </div>
    </div>
  );
}
