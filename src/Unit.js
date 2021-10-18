import React, {useState} from "react";

export default function Unit(props) {
    const [unit, setUnit] = useState("celsius");

    function celsius(event) {
        event.preventDefault();
        setUnit("celsius")
    }

    function fahrenheits(event) {
        event.preventDefault();
        setUnit("fahrenheit")
    }

    function convertUnit() {
        return (props.celsius * 9)/ 5 + 32;
    }

    if (unit=== "fahrenheit") {
        return (
        <div className="unitTemp">
            <h2>{Math.round(convertUnit())}°
              <span className="unit">
              <a href="/" onClick={celsius}>C</a> | F
              </span>
              </h2>
        </div>
        
    )} else {
        return (
        <div className="unitTemp">
            <h2>{Math.round(props.celsius)}°
              <span className="unit">
              C | <a href="/" onClick={fahrenheits}>F</a>
              </span>
              </h2>
        </div>
        )
    }
    
}