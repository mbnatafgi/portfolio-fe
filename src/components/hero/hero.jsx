import React, { Component } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import "./hero.css";
import Typed from "react-typed";
import variables from "../common/_variables.scss";
import {context} from "../common/context";


class Vanta extends Component {

  constructor() {
    super();
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.newVantaObject()
  }

  newVantaObject = () => {
    this.vantaEffect = BIRDS({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: this.getBackgroundColor(),
      color1: this.getColor1(),
      color2: this.getColor2(),
      // colorMode: "lerpGradient"

    });
  }

  componentDidUpdate() {
    this.vantaEffect.destroy();
    this.newVantaObject();
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  getBackgroundColor = () => {
    return this.props.dark ? variables.darksecondary : variables.darkprimary;
  }

  getColor1 = () => {
    // return this.props.dark ? variables.colorfulprimary : 0xff4a;
    return this.props.dark ? variables.colorfulprimary : variables.colorfulsecondary;
  }

  getColor2 = () => {
    return variables.lightsecondary
  }

  render() {
    return (
      <div className="vanta" ref={this.vantaRef}>
        {this.props.children}
      </div>
    )
  }

}


class Hero extends Component {

  render() {
    return (
      <div className={`hero-main ${this.context.state.dark ? 'dark': ''}`} id="hero">
        <Vanta dark={this.context.state.dark}>
          <div className="hero-welcome">
              <Typed
                strings={[
                  "<p>Hello! I'm</p><p class='name'>Belal Natafgi</p>",
                  "<p>A Software Engineer...</p>"
                ]}
                typeSpeed={60}
                backSpeed={60}
                backDelay={3000}
                loop={true}
                showCursor={false}
              />
          </div>
        </Vanta>
      </div>
    );
  }
}

Hero.contextType = context;

export default Hero;
