import React from 'react';
import './app.css';
import Hero from '../hero/hero';
import NavBar from '../navbar/navbar';
import About from '../about/about';
import Contact from '../contact/contact';
import Experience from '../experience/experience';
import More from '../more/more';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className='app'>
      <Hero/>
      <NavBar/>
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
