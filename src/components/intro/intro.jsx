import React from 'react';
import './intro.css';

const Intro = (props) => {
    return ( 
        <div className="intro-main">
            <div className="header dark">
                <h2>Who Am I?</h2>
            </div>
            <p className="dark">I'm a software engineer currently working as a back-end developer and team lead at Cloud Gate Consulting in Beirut, Lebanon. I have over two years' worth of experience in software development. I hold a bachelor  degree in Computer & Communications  Engineering from the American University of Beirut. <span className='colorful'>I love to code!</span></p>
        </div>
     );
}
 
export default Intro;