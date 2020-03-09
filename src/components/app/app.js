import React from 'react';
import './app.css';
import Hero from '../hero/hero';
import NavBar from '../navbar/navbar';

function App() {
  return (
    <React.Fragment>
      <Hero/>
      <NavBar/>
    </React.Fragment>
  );
}

export default App;
