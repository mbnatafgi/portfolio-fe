import React from 'react';
import './about.css';
import Intro from '../intro/intro';
import Image from '../image/image';

const About = (props) => {
    return ( 
        <div className="about-main">
            <div className="header">
                <h2 className="dark">About Me</h2>  
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
            </div>
        </div>
     );
}
 
export default About;