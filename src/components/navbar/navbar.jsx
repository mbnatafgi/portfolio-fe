import React, { Component } from 'react';
import {debounce} from '../common/helpers';
import './navbar.css';
import $ from 'jquery';
import {context} from "../common/context";
import ReactGA from "react-ga";

class NavLink extends Component {

     constructor(props){
         super();
         this.ref = React.createRef();
         this.state = {
            is_highlighted: props.title === 'Home'
         }
     }

    componentDidMount() {
        window.addEventListener("scroll", debounce(this.handleScroll, 10));
    }
    
    componentDidUpdate() {
        if(this.state.is_highlighted && this.ref.current){
            this.props.onUpdate(this.ref.current);
        }
    }
    
    handleScroll = (event) => {
        const section = document.getElementById(this.props.href.split('#')[1]);
        if(section){
            const windowsOffset = window.pageYOffset + this.getBoundryWithOffset();
            const is_highlighted =  windowsOffset >= section.offsetTop && windowsOffset <= section.offsetTop + section.offsetHeight
            if(is_highlighted !== this.state.is_highlighted){
                section && this.setState({is_highlighted: is_highlighted});
            }
        }
    }
    
    getBoundryWithOffset = () => 55;
    
    
    handleClick = (event) => {
        if (this.ref.current && this.ref.current.hash !== "") {
            event.preventDefault();
            var hash = this.ref.current.hash;
            $('html, body').animate(
                {scrollTop: $(hash).offset().top - this.getBoundryWithOffset() + 2},
                300,
                function(){}
            );
        }
        ReactGA.event({
            category: 'User',
            action: 'Used Navigation',
            label: this.props.href
        });
    }
        
    render() { 
        return ( 
            <a 
                ref={this.ref}
                href={this.props.href}
                className={`${this.props.className} ${this.state.is_highlighted ? 'active' : ''}`} 
                onClick={this.handleClick}
                target={this.props.target}
                onWheel={this.props.onWheel}
            >
                    {this.props.title}
            </a>
        );
    }
}

const ModeToggle = (props) => {
    return (
        <context.Consumer>
            {
                (context) => (
                    <label className="switch">
                        <input type="checkbox" checked={context.state.dark} onChange={context.handleModeChange.bind(null)}/>
                        <span className="slider round"></span>
                    </label>
                )
            }
        </context.Consumer>
    )
}
        

class NavBar extends Component {
    state = {  }

    constructor(){
        super();
        this.ref = React.createRef();
    }

    handleUpdate = (elem) => {

        $(this.ref.current).animate(
            {scrollLeft: elem.offsetLeft -  this.ref.current.offsetLeft + 0}, 
            300, 
            function(){}
        );
    }

    render() { 
        
        const links = [
            {title: 'Home', href: '/#hero', classes: 'nav-link'},
            {title: 'About', href: '/#about', classes: 'nav-link'},
            {title: 'Experience', href: '/#experience', classes: 'nav-link'},
            {title: 'Details', href: '/#more', classes: 'nav-link'},
            {title: 'Contact', href: '/#contact', classes: 'nav-link'},
        ];
        
        const resume = {title: 'Resume', href: `${process.env.PUBLIC_URL}/media/resume${this.context.state.dark ? '-dark' : ''}.pdf`, classes: 'nav-link resume',  target:"_blank"}

        return (
            <context.Consumer>
                {(context) => (
                    <div className={`navbar-main sticky ${context.state.dark ? 'dark' : ''}`}  >
                        <div className="container wrapper">
                            <div className="navbar-links no-scrollbars" id="navbar-links" ref={this.ref}>
                                {links.map(link =>
                                    <NavLink key={link.href} title={link.title} href={link.href} className={link.classes} target={link.target} onUpdate={this.handleUpdate} />
                                )}
                            </div>
                            <div className="right">
                                <div>
                                    <ModeToggle />
                                </div>
                                <NavLink title={resume.title} href={resume.href} className={resume.classes} target={resume.target} onUpdate={this.handleUpdate} />
                            </div>
                        </div>
                    </div>
                )}
            </context.Consumer>
         );
    }
}

NavBar.contextType = context;
 
export default NavBar;
