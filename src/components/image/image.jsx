import React, { Component } from "react";
import "./image.css";
import me from "./me.jpg";

console.log("hi", me);

const Image = props => {
  return (
    <div className="image-main">
      <div className="image-wrapper">
        <img src={me} className="clipped" />
      </div>
    </div>
  );
};

export default Image;
