import React from "react";
import "./image.css";
import me from "./me.jpeg";

const Image = props => {
  return (
    <div className="image-main">
      <div className="image-wrapper">
        <img src={me} className="clipped" alt="" />
      </div>
    </div>
  );
};

export default Image;
