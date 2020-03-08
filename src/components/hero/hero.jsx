import React, { Component } from 'react';
import BIRDS from 'vanta/dist/vanta.birds.min';
// import * as THREE from 'vanta/vendor/three.r95.min';
import './hero.css';

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
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x2f3b4a,
          color1: 0xff4a,
          color2: 0x4bd4ff
        });
      }
      componentWillUnmount() {
        if (this.vantaEffect) this.vantaEffect.destroy();
      }
      render() {
        return (
            <div ref={this.vantaRef} className='hero-main'>  
                <div className="hero-welcome">
                        <p>Hello! I'm</p>
                        <p className='name'>Mohamad Belal Natafgi,</p>
                        <p>a software engineer.</p>
                </div>
            </div>
        )
      }
}
 
export default Hero;