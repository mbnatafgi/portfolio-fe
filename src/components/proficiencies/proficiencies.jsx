import React from 'react';
import './proficiencies.css';
import {context} from "../common/context";
import {ReactComponent as PYTHON} from "./python.svg";
import {ReactComponent as BASH} from "./bash.svg";
import {ReactComponent as GIT} from "./git.svg";
import {ReactComponent as MONGO} from "./mongo.svg";
import {ReactComponent as SQL} from "./db.svg";
import {ReactComponent as DOCKER} from "./docker.svg";
import {ReactComponent as KUBE} from "./kube.svg";
import {ReactComponent as WEB} from "./web.svg";

const Proficiency = (props) => {
    return (
        <div className={`proficiency-main ${props.dark ? 'dark' : ''}`}>
            <div className='title '>
                <div className="svg ">{props.icon}</div>
                <div className="txt ">{props.title}</div>
            </div>
            <div className="active" style={{width: `${35+70*props.value/props.max}%`}} ></div>
            <div className="passive"></div>
        </div>
    )
}

const Proficiencies = (props) => {

    const profs = [
        {title: 'Python', value: 0.9, max: 1, icon: <PYTHON/>},
        {title: 'Bash', value: 0.75, max: 1, icon: <BASH/>},
        {title: 'Git', value: 0.81, max: 1, icon: <GIT/>},
        {title: 'SQL', value: 0.81, max: 1, icon: <SQL/>},
        {title: 'Docker', value: 0.87, max: 1, icon: <DOCKER/>},
        {title: 'MongoDB', value: 0.84, max: 1, icon: <MONGO/>},
        {title: 'Kubernetes', value: 0.81, max: 1, icon: <KUBE/>},
        {title: 'HTML+CSS+JS', value: 0.78, max: 1, icon: <WEB/>},
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