import './App.css';
import Landing from './Components/Landing';
import History from './Components/History';
import Skills from './Components/Skills';
import About from './Components/About';
import Projects from './Components/Projects';
function App() {

  return (
    <div className="App">
        <Landing id="landing" />
        <Skills />
        <About />
        <History />
        <Projects />
      </div>
  );
}

export default App;
