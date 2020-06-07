import React from 'react';
import './skills.css';
import {context} from "../common/context";
import {ReactComponent as AUTO} from "./auto.svg";
import {ReactComponent as CODE} from "./code.svg";
import {ReactComponent as CONTAINER} from "./container.svg";
import {ReactComponent as DOC} from "./doc.svg";

const Skill = (props) => {
    return (
        <div className={`skill-main ${props.dark ? 'dark' : ''} col col-sm-6 col-12`}>
            {props.icon}
            <h3 className="title">{props.title}</h3>
            <p className="description">{props.description}</p>
        </div>
    )
}

const Skills = (props) => {

    const skills = [
        {icon: <CODE/>, title: 'Quality Code', description: 'Writing clean, readable, structured, maintainable, and abstract code is my highest priority.'},
        {icon: <DOC/>, title: 'Documentation', description: 'Writing and maintaining API and CLI documentation for easy and smooth integration among team members.'},
        {icon: <CONTAINER/>, title: 'Deployment', description: 'Deploying containerized applications for ultimate portability and isolation using Docker engine and orchestration tools like Kubernetes.'},
        {icon: <AUTO/>, title: 'Automation', description: 'Writing bash scripts for automating repetitive tasks that are especially handy when developing microservice-based solutions.'},
    ]

    return (
        <context.Consumer>
            {(context) => (
                <div className="skills-main">
                    <div className={`header ${context.state.dark ? 'light': 'dark'}`}>
                        <h2>What Am I Good At?</h2>
                    </div>
                    <div className="skills row">
                        {skills.map(skill => <Skill key={skill.title} {...skill} dark={context.state.dark}/>)}
                    </div>
                </div>
            )}
        </context.Consumer>
     );
}
 
export default Skills;