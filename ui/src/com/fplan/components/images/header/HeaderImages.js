import React from "react";

import HeaderImage1 from "../../../../../assets/images/headermain1";
import HeaderImage2 from "../../../../../assets/images/headermain2";
import "./HeaderImages.css";

export default function headerimages(props) {
  if (props.image === "1") {
    return (
      <div className="HeaderImages">
        <div className="Images">
          <img src={HeaderImage1} alt="HeaderImage1" />
        </div>
      </div>
    );
  }

  if (props.image === "2") {
    return (
      <div className="HeaderImages">
        <div className="Images">
          <img src={HeaderImage2} alt="HeaderImage2" />
        </div>
      </div>
    );
  }

  if (props.image === "3") {
    return (
      <div className="HeaderImages">
        <div className="Images">
          <img src={HeaderImage1} alt="HeaderImage1" />
        </div>
      </div>
    );
  }
}
