import './App.css';

function App() {
  return (
    <div className="container">
      <div className="App">
        <div className="Weather">
          <form>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  class="form-control"
                  placeholder="Search city"
                  autofocus="on"
                  id="city-search"
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  className="btn btn-primary w-100"
                  value="Search"
                />
              </div>
            </div>
          </form>
          <div className="overview mt-3">
            <h1 className="mb-2">Ontaro</h1>
            <ul>
              <li>Last uptaded: Saturday 12:00</li>
              <li>Cloudy</li>
            </ul>
          </div>
          <div className="row mt-4 mainview">
            <div className="col-6 flex">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                alt="cloudy"
              />
              <h2>23°</h2>
            </div>
            <div className="col-6">
              <ul>
                <li>Feels like: 22°</li>
                <li>Humidity: 5%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="link">
        Open source code at <a href="https://github.com/casnafu/react-app" rel="noreferrer" target="_blank">GitHub</a>
      </div>
    </div>
  );
}

export default App;
