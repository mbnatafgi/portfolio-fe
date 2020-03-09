import React, { Component } from 'react';
import './image.css';
import me from './me.jpg';

console.log('hi', me);

const Image = (props) => {
    return ( 
        <div className='image-main'>
            <img src={me} className="clipped"/> 
        </div>
    );
}
 
export default Image;