import React from 'react';
import './app.css';
import Hero from '../hero/hero';
import NavBar from '../navbar/navbar';
import About from '../about/about';
import Contact from '../contact/contact';
import Experience from '../experience/experience';
import More from '../more/more';

function App() {
  return (
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
  );
}

export default App;
