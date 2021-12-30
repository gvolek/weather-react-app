import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          °F |{" "}
          <a href="/" onclick={showCelcius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celcius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(celcius)}</span>
        <span className="unit">
          <a href="/" onclick={showFahrenheit}>
            °F
          </a>
          |°C
        </span>
      </div>
    );
  }
}
