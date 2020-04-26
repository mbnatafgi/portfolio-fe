import React from 'react';
import './app.css';
import Hero from '../hero/hero';
import NavBar from '../navbar/navbar';
import About from '../about/about';
import Contact from '../contact/contact';
import Experience from '../experience/experience';
import More from '../more/more';
import Provider from "../common/context";

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
