import React from "react";
import "./WeatherInfo.css";

function WeatherInfo(props) {
  if (!props.weatherData.main) {
    return <>"just wait a minute"</>;
  }

  const temp = props.weatherData.main.temp;

  const response = () => {
    if (props.weatherData.name === "Detroit") {
      return "Go Buckeyes!";
    } else if (temp > 70) {
      return (
        " It's a beautiful " +
        temp +
        " degree day outside, come in, see how good you look "
      );
    } else if (temp > 50) {
      return " See the sky in the Model 3 on a " + temp + " degree day ";
    } else {
      return " Stay warm and happy in your Model X ";
    }
  };
  return (
    <div className="weather">
      <p>Dear friends in {props.weatherData.name}</p>
      <p>the temperature is: {props.weatherData.main.temp} degrees</p>
      <p>your weather: {props.weatherData.weather[0].description}</p>
      <h3>{response()}</h3>
    </div>
  );
}

export default WeatherInfo;
