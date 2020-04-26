import React from 'react';
import './proficiencies.css';
import {context} from "../common/context";

const Proficiency = (props) => {
    return (
        <div className={`proficiency-main ${props.dark ? 'dark' : ''}`}>
            <div className={`title`}>{props.title}</div>
            <div className="active" style={{width: `${35+70*props.value/props.max}%`}} ></div>
            <div className="passive"></div>
        </div>
    )
}

const Proficiencies = (props) => {

    const profs = [
        {title: 'Python', value: 0.9, max: 1},
        {title: 'Bash', value: 0.79, max: 1},
        {title: 'Git', value: 0.81, max: 1},
        {title: 'MongoDB', value: 0.84, max: 1},
        {title: 'SQL', value: 0.81, max: 1},
        {title: 'Docker', value: 0.87, max: 1},
        {title: 'Kubernetes', value: 0.81, max: 1},
    ]
    
    return ( 
        <context.Consumer>
            {(context) => (
                <div className='proficiencies-main'>
                    <div className={`header ${context.state.dark ? 'light' : 'dark'}`}>
                        <h2>What Am I Proficient In?</h2>
                    </div>
                    {profs.map(prof => <Proficiency key={prof.title} {...prof} dark={context.state.dark}/>)}
                </div>
            )}
        </context.Consumer>
     );
}


export default Proficiencies;