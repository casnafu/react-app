import './App.css';
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Search mainCity="Bremen" />
        <div className="link">
          Project created by <a href="https://camif-me.netlify.app/" target="_blank" rel="noreferrer">Camilla Ferreira</a> and its open source code is on <a href="https://github.com/casnafu/react-app" rel="noreferrer" target="_blank">GitHub</a> avaliable.
        </div>
      </div>
    </div>
  );
}

export default App;
