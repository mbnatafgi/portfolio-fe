import React from 'react';
import './app.css';
import Hero from '../hero/hero';
import NavBar from '../navbar/navbar';
import About from '../about/about';
// import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <React.Fragment>
      <Hero/>
      <NavBar/>
      <About/>
    </React.Fragment>
  );
}

export default App;
