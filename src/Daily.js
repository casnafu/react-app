import React from "react";

export default function Daily(props) {
    const icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`

    function tempMax() {
        let max = Math.round(props.data.temp.max);
        return `${max}°`;
    }

    function tempMin() {
        let min = Math.round(props.data.temp.min);
        return `${min}°`;
    }

    function day() {
        const date = new Date(props.data.dt * 1000);
        const day = date.getDay();

        const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

        return days[day];
    }

    return (
        <div>
            <div className="days">{day()}</div>
            <img className="icon" src={icon} alt="" />
            <div className="temp">
                <span className="temp-max">{tempMax()}</span>
                <span className="temp-min">{tempMin()}</span>
            </div>

        </div>
    )
}