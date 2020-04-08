import React, { Component } from 'react';
import './navbar.css';
import $ from 'jquery';

class NavLink extends Component {
    state = { 
        is_highlighted: false
     }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
        this.ref = React.createRef();
    }

    handleScroll = (event) => {
        const section = document.getElementById(this.props.href.split('#')[1]);
        section && this.setState({is_highlighted: window.pageYOffset >= section.offsetTop && window.pageYOffset <= section.offsetTop + section.offsetHeight});
    }

    handleClick = (event) => {
        if (this.ref.current && this.ref.current.hash !== "") {
            event.preventDefault();
            var hash = this.ref.current.hash;
            $('html, body').animate(
                {scrollTop: $(hash).offset().top}, 
                800, 
                function(){window.location.hash = hash;}
            );
        }
    }

    render() { 
        return ( 
            <a ref={this.ref} href={this.props.href} className={`${this.props.className} ${this.state.is_highlighted ? 'active' : ''}`} onClick={this.handleClick} target={this.props.target}>{this.props.title}</a>
         );
    }
}

const NavBar = () => {
    return ( 
        <div className='navbar-main sticky'>
            <div className="navbar-links container">
                <NavLink title="About" href="/#about" className="nav-link"/>
                <NavLink title="Experience" href="/#experience" className="nav-link"/>
                {/* <NavLink title="Details" href="#more" className="nav-link"/> */}
                <NavLink title="Contact" href="/#contact" className="nav-link"/>
                <NavLink title="Resume" href={`${process.env.PUBLIC_URL}/media/CV.pdf`} className="nav-link resume" target="_blank"/>
            </div>
            <div className="grad-line"></div>
        </div>
     );
}
 
export default NavBar;
