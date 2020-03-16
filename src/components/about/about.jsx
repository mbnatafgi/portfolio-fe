import React from 'react';
import './about.css';
import Intro from '../intro/intro';
import Image from '../image/image';
import Proficiencies from '../proficiencies/proficiencies';
import Skills from '../skills/skills';
import Values from '../values/values';


const About = (props) => {
    return ( 
        <React.Fragment>
        <div id="about" className="about-main">
            <div className="header dark underline section">
                <h2>About</h2>    
            </div>
            <div className='rows'>
                <div className="row">
                    <div id='intro' className="column">
                        <Intro/>
                    </div>
                    <div id="image" className="column">
                        <Image/>
                    </div>
                    <div id="proficiencies" className="column">
                        <Proficiencies/>
                    </div>
                </div>
                <div className="row">
                </div>
                <div className="row">
                    <div id="skills" className="column">
                        <Skills/>
                    </div>
                    <div id="values" className="column">
                        <Values/>
                    </div>
                </div>
            </div>
        </div>
        <div className="grad-line"></div>
        </React.Fragment>
     );
}
 
export default About;