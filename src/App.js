import './App.css';
import Landing from './Components/Landing';
import History from './Components/History';
import Skills from './Components/Skills';
import About from './Components/About';
function App() {

  return (
    <div className="App">
        <Landing id="landing" />
        <About />
        <Skills />
        <History />
      </div>
  );
}

export default App;
