import React from "react";
import "./Forecast.css"

export default function Forecast() {
    return (
        <div className="daily-forecast">
            <div className="row">
                <div className="col">
                    <div className="days">Wed</div>
                    <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" />
                    <div className="temp">
                        <span className="temp-max">13°</span>
                        <span className="temp-min">7°</span>
                    </div>

                </div>
            </div>
        </div>
    )
}