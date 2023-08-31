import logo from './logo.svg';
import './App.css';
import React from 'react';
import Home from './Home';
import About from './About'
import Contacts from './Contact';
import Navbar from './Navbar';
import Gallery from './Gallery';

function App() {

  
  return (
    <div>
      <Navbar />
      <Home title="Photography"/>
       <About />
       <Contacts />
       <Gallery />

    </div>
  )
}

export default App;
 

// Use props,
// Conditional rendering
// Use components
// Use useState and useEffect