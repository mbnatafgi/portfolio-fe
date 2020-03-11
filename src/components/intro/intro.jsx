import React, { Component } from 'react';
import './intro.css';

const Intro = (props) => {
    return ( 
        <div className="intro-main">
            <div className="header">
                <h2 className="dark">Who Am I?</h2>
            </div>
            <p className="dark">I'm a back-end developer and team lead at Cloud Gate Consulting in Beirut, Lebanon. I have over two years worth of experience in software development. I hold a bachelor  degree in Computer & Communications  Engineering from the American University of Beirut. <span className='colorful'>I love to code!</span></p>
        </div>
     );
}
 
export default Intro;