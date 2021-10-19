import React, { useState } from "react";
import axios from "axios";
import Daily from "./Daily";
import "./Forecast.css"

export default function Forecast(props) {
    const [ready, setReady] = useState(false);
    const [forecast, setForecast] = useState(null);

    function displayForecast(response) {
        setForecast(response.data.daily[1])
        setReady(true)
    }

    if (ready) {
        return (
            <div className="daily-forecast">
                <div className="row">
                    {forecast.map(function (eachDay, index) {
                        if (index < 5) {
                            return (
                                <div className="col" key={index}>
                                    <Daily data={eachDay} />
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
        );
    } else {
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coords.lat}&lon=${props.coords.lon}&appid=3e0682ae194ff3e2ec44c7b6c87e5f9c&units=metric`;
        axios.get(url).then(displayForecast);

        return null;
    }
}
