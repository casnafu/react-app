import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather/>
      </div>
      <div className="link">
        Open source code at <a href="https://github.com/casnafu/react-app" rel="noreferrer" target="_blank">GitHub</a>
      </div>
    </div>
  );
}

export default App;
