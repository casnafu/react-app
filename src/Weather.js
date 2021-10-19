import React from "react";
import Date from "./Date";
import Unit from "./Unit";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="overview mt-3">
        <h1>{props.data.city}, {props.data.country}</h1>
        <ul>
          <li><Date date={props.data.date} /></li>
          <li className="text-capitalize">{props.data.description}</li>
        </ul>
      </div>
      <div className="row mt-4 mainview">
        <div className="col-6 flex">
          <img
            src={props.data.icon}
            alt={props.data.description}
          />
          <Unit celsius={props.data.temperature} />
        </div>
        <div className="col-6">
          <ul>
            <li>Feels like: {Math.round(props.data.feels_like)}°</li>
            <li>Humidity: {props.data.humidity}%</li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}