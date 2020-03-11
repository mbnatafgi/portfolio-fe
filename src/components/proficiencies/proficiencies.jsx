import React, { Component } from 'react';
import './proficiencies.css';

const Proficiency = (props) => {
    return (
        <div className='proficiency-main'>
            <div className='title'>{props.title}</div>
            <div className='scale'>
                <div className="active" style={{flex: props.value}}></div>
                <div className="passive" style={{flex: props.max-props.value}}></div>
            </div>
        </div>
    )
}

const Proficiencies = (props) => {

    const profs = [
        {title: 'Python', value: 0.88, max: 1},
        {title: 'Bash', value: 0.8, max: 1},
        {title: 'Git', value: 0.78, max: 1},
        {title: 'MongoDB', value: 0.8, max: 1},
        {title: 'SQL', value: 0.78, max: 1},
        {title: 'Docker', value: 0.85, max: 1},
        {title: 'Kubernetes', value: 0.78, max: 1},
    ]
    
    return ( 

        <div className='proficiencies-main'>
            <div className="header">
                <h2 className="dark">What Am I Proficient In?</h2>
            </div>
                {profs.map(prof => <Proficiency key={prof.title} {...prof}/>)}
            <br/>           
        </div>
     );
}


export default Proficiencies;