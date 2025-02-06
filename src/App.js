import './App.css';
import Contact from './pages/Contact';
import Homepage from './pages/Homepage'; // Assuming this is the correct component
import Project from './pages/Project';
import Skills from './pages/Skills'; // eslint-disable-next-line
function App() {
  return (
    <div>
      <Homepage /> {/* Use the correct component name here */}
      {/* <About />
      <Service /> */}
      <Skills /> {/* Corrected from Skill to Skills */}
      <Project />
      <Contact /> */
    </div>
  );
}

export default App;