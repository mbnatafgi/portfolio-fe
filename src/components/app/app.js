import React from 'react';
import './app.css';
import Hero from '../hero/hero';
import NavBar from '../navbar/navbar';
import About from '../about/about';
import Contact from '../contact/contact';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <React.Fragment>
      <Hero/>
      <NavBar/>
      <About/>
      <Contact/>
    </React.Fragment>
  );
}

export default App;
