import React from 'react';
import './proficiencies.css';

const Proficiency = (props) => {
    return (
        <div className='proficiency-main'>
            <div className='title'>{props.title}</div>
            <div className="active" style={{width: `${30+70*props.value/props.max}%`}} ></div>
            <div className="passive"></div>
        </div>
    )
}

const Proficiencies = (props) => {

    const profs = [
        {title: 'Python', value: 0.89, max: 1},
        {title: 'Bash', value: 0.75, max: 1},
        {title: 'Git', value: 0.77, max: 1},
        {title: 'MongoDB', value: 0.8, max: 1},
        {title: 'SQL', value: 0.77, max: 1},
        {title: 'Docker', value: 0.83, max: 1},
        {title: 'Kubernetes', value: 0.77, max: 1},
    ]
    
    return ( 

        <div className='proficiencies-main'>
            <div className="header dark">
                <h2>What Am I Proficient In?</h2>
            </div>
            {profs.map(prof => <Proficiency key={prof.title} {...prof}/>)}
        </div>
     );
}


export default Proficiencies;