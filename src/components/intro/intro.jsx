import React from 'react';
import './intro.css';
import {context} from "../common/context";

const Intro = (props) => {
    return (
        <context.Consumer>
            {(context) => {
                return (
                    <div className={`intro-main ${context.state.dark ? 'dark' : 'light'}`}>
                        <div className={`header ${!context.state.dark ? 'dark' : 'light'}`}>
                            <h2>Who Am I?</h2>
                        </div>
                        <p>I'm a software engineer currently working as a backend developer at Adjust GbmH in Berlin, Germany. 
                            I have over two years' worth of experience in software development. I have just enough background
                            to design and implement APIs, and just enough knowledge in DevOps to deploy and get a solution live.
                            I also hold a bachelor degree in Computer & Communications Engineering from the American University
                            of Beirut. <span className='colorful'>I love to code!</span>
                        </p>
                    </div>
                )
            }}
        </context.Consumer>
     );
}
 
export default Intro;