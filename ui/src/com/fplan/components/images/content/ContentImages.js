import React from "react";

import ContentImage1 from "../../../../../assets/images/photo-3dgraph.jpeg";
import ContentImage2 from "../../../../../assets/images/paper-on-gray.jpg";
import ContentImage3 from "../../../../../assets/images/graph.jpg";
import "./ContentImages.css";

export default function contentimages(props) {
  if (props.image === "3d") {
    return (
      <div>
        <div className="HeaderImages">
          <div className="Images">
            <img src={ContentImage1} alt="ContentImage1" />
          </div>
        </div>
      </div>
    );
  }

  if (props.image === "paper") {
    return (
      <div>
        <div className="HeaderImages">
          <div className="Images">
            <img src={ContentImage2} alt="ContentImage2" />
          </div>
        </div>
      </div>
    );
  }
  if (props.image === "graph") {
    return (
      <div>
        <div className="HeaderImages">
          <div className="Images">
            <img src={ContentImage3} alt="ContentImage3" />
          </div>
        </div>
      </div>
    );
  }
}
