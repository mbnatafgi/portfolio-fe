import React from 'react';
import './more.css';

const More = (props) => {
    return ( 
        <React.Fragment>
            <div id="more" className="more-main">
                <div className="header dark">
                    <h2>Looking For More Details?</h2>
                </div>
                <br/>
                <div className='resume'>
                    <a href={`${process.env.PUBLIC_URL}/media/CV.pdf`} target="_blank">View My Resume</a>
                </div>
            </div>
            <div className="grad-line"></div>
        </React.Fragment>
     );
}
 
export default More;