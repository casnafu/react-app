import './App.css';
import './Media.css'
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search mainCity="Bremen" />
        <div className="link">
          Project created by <a className="text-decoration-none" href="https://camif-me.netlify.app/" target="_blank" rel="noreferrer" title="Portfolio">Camilla Ferreira</a> and it is avaliable on <a className="text-decoration-none" href="https://github.com/casnafu/react-app" rel="noreferrer" target="_blank" title="GitHub">GitHub</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
