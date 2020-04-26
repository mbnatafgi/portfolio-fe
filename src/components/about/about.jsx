import React from 'react';
import './about.css';
import Intro from '../intro/intro';
import Image from '../image/image';
import Proficiencies from '../proficiencies/proficiencies';
import Skills from '../skills/skills';
import Values from '../values/values';
import 'bootstrap-grid-only-css/dist/css/bootstrap-grid.min.css';
import {context} from "../common/context";

const About = (props) => {

    return ( 
        <context.Consumer>
            {(context) => (
                    <React.Fragment>
                        <div id="about" className={`about-main ${context.state.dark ? 'dark' : ''}`}>
                            <div className={`header ${context.state.dark ? 'light' : ''} underline section`}>
                                <h2>About</h2>
                            </div>
                            <div className='container'>
                                <div className="row">
                                    <div id='intro' className="col col-md-7 col-12 order-md-first">
                                        <Intro/>
                                    </div>
                                    <div id="image" className="col col-md-5 col-12 order-first">
                                        <Image/>
                                    </div>
                                    <div id="proficiencies" className="col col-12">
                                        <Proficiencies/>
                                    </div>
                                    <div id="skills" className="col col-lg-6 col-12">
                                        <Skills/>
                                    </div>
                                    <div id="values" className="col col-lg-6 col-12">
                                        <Values/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grad-line"></div>
                    </React.Fragment>

                )
            }
        </context.Consumer>
     );
}

export default About;