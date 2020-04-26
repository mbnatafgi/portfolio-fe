import React from "react";
import "./image.css";
import me from "./me.jpeg";
import {context} from "../common/context";

const Image = props => {
  return (
    <context.Consumer>
        {(context) => (
            <div className={`image-main ${context.state.dark ? 'dark' : ''}`}>
              <div className="image-wrapper">
                <img src={me} className="clipped" alt="" />
              </div>
            </div>
        )}
    </context.Consumer>
  );
};

export default Image;
