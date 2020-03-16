import React, { Component } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
// import * as THREE from 'vanta/vendor/three.r95.min';
import "./hero.css";
import Typed from "react-typed";
import variables from "../common/_variables.scss";

class Hero extends Component {
  constructor() {
    super();
    this.vantaRef = React.createRef();
  }
  componentDidMount() {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: variables.darkprimary,
      color1: 0xff4a,
      color2: 0x4bd4ff
    });
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }
  render() {
    return (
      <div ref={this.vantaRef} className="hero-main">
        <div className="hero-welcome">
          <Typed
            strings={[
              "<p>Hello! I'm</p><p class='name'>Mohamad Belal Natafgi</p>",
              "<p>A Software Engineer...</p>"
            ]}
            typeSpeed={60}
            backSpeed={60}
            backDelay={3000}
            loop={true}
            showCursor={false}
          />
        </div>
      </div>
    );
  }
}

export default Hero;
