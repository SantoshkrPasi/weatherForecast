import React from "react";
import { useWeather } from "../context/Weather";

function Input() {
  const WeatherReport = useWeather();

  return (
    <input
      className="input-field"
      placeholder="Enter City"
      value={WeatherReport.searchCity}
      onChange={(e) => WeatherReport.setSearchCity(e.target.value)}
    />
  );
}

export default Input;
