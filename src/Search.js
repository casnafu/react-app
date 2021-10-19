import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

import "./Weather.css";
import Forecast from "./Forecast";

export default function Search(props) {
  const [city, setCity] = useState(props.mainCity);
  const [forecast, setForecast] = useState({ ready: false })

  function displayForecast(response) {
    setForecast({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      feels_like: response.data.main.feels_like,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
      country: response.data.sys.country,
    });
  }

  function handleForm(event) {
    event.preventDefault();
    apiCall();
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  function apiCall() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3e0682ae194ff3e2ec44c7b6c87e5f9c&units=metric`;
    axios.get(url).then(displayForecast);
  }


  if (forecast.ready) {
    return (
      <div className="Search">
        <form onSubmit={handleForm}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="form-control"
                placeholder="search city"
                autoFocus="on"
                id="city-search"
                onChange={handleCity}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                className="btn btn-primary w-100"
                value="search"
              />
            </div>
          </div>
        </form>
        <Weather data={forecast} />
        <Forecast />
      </div>
    );
  } else {
    apiCall();
    return "Loading forecast..."
  }
}