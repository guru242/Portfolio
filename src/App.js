<<<<<<< HEAD
import './App.css';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage'; // Assuming this is the correct component
import Project from './pages/Project';
import Skills from './pages/Skills'; // eslint-disable-next-line
function App() {
  return (
    <div>
      <Homepage /> {/* Use the correct component name here */}
=======
import React from 'react';
import './App.css'; // Ensure this file exists, or remove it
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Homepage'; // Ensure file exists
import Project from './pages/Project';
import Service from './pages/Service';
import Skill from './pages/Skills'; // Ensure file exists

function App() {
  return (
    <div>
      <Home /> {/* Displays the homepage component */}
      {/* Uncomment the components below if you want to show them */}
>>>>>>> c2a0005 (Removed duplicate my-app folder)
      {/* <About />
      <Service /> */}
      <Skills /> {/* Corrected from Skill to Skills */}
      <Project />
      <Contact /> */
    </div>
  );
}

export default App;