import React from 'react';
import './about.css';
import Intro from '../intro/intro';
import Image from '../image/image';
import Proficiencies from '../proficiencies/proficiencies';
import Skills from '../skills/skills';
import Values from '../values/values';
import Experience from '../experience/experience';
import More from '../more/more';

const About = (props) => {
    return ( 
        <div className="about-main">
            <div className="header">
                <h1 className="dark">About Me</h1>  
                <div className="dark"></div>  
            </div>
            <br/>
            <div className="row">
                <div className="column">
                    <Intro/>
                </div>
                <div className="column">
                    <Image/>
                </div>
                <div className="column">
                    <Proficiencies/>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <Skills/>
                </div>
                <div className="column">
                    <Values/>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <Experience/>
                </div>
            </div>
            <div className="row">
                <div className="column">
                    <More/>
                </div>
            </div>
        </div>
     );
}
 
export default About;