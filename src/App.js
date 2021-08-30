import './App.css';
import Landing from './Components/Landing';
import History from './Components/History';
import Skills from './Components/Skills'
function App() {

  return (
    <div className="App">
        <Landing id="landing" />
        <Skills />
        <History />
      </div>
  );
}

export default App;
