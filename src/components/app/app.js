import React from 'react';
import ReactGA from 'react-ga';
import './app.css';
import Hero from '../hero/hero';
import NavBar from '../navbar/navbar';
import About from '../about/about';
import Contact from '../contact/contact';
import Experience from '../experience/experience';
import More from '../more/more';
import Provider from "../common/context";

ReactGA.initialize(process.env.REACT_APP_GA_ID || '');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
  return (
    <Provider>
        <div className='app bootstrap-wrapper'>
          <Hero/>
          <div className="nav">
            <NavBar/>
          </div>
          <div className='body'>
            <About/>
            <Experience/>
            <More/>
            <Contact/>
          </div>
        </div>
    </Provider>
  );
}

export default App;
