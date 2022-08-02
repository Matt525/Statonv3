import './App.css';
import Landing from './Components/Landing';
import History from './Components/History';
import Skills from './Components/Skills';
import About from './Components/About';
import Contact from './Components/Contact';
import ProjectGrid from './Components/ProjectGrid';


function App() {
  return (
    <div className="App">
        <Landing id="landing" />
        <About />
        <Skills />
        <History />
        <ProjectGrid />
        <Contact />
      </div>
  );
}

export default App;
