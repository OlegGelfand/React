import React, { useState, useEffect } from "react";
import "./App.css";
import Modelx from "../Modelx/Modelx";
import Modely from "../Modely/Modely";
import MainPage from "../MainPage/MainPage";
import { Route, Switch } from "react-router-dom";
import Footer from "../Footer/Footer";
import WeatherInfo from "../WeatherInfo/WeatherInfo";

function App(props) {
  const [weatherData, setWeatherData] = useState({});

  const [ipData, setIPData] = useState("");

  useEffect(() => {
    const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const ipAddressUrl = `http://gd.geobytes.com/GetCityDetails`;
    const makeIPApiCall = async () => {
      const response = await fetch(`${proxyUrl}${ipAddressUrl}`);
      let resText = await response.text();
      let json = JSON.parse(resText);
      setIPData(json);
    };
    makeIPApiCall();
  }, []);

  useEffect(() => {
    const addressInfo = ipData.geobytesfqcn;
    const makeApiCall = async () => {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${addressInfo}&units=imperial&appid=${process.env.REACT_APP_WEATHERAPPAPI}`;
      const res = await fetch(weatherUrl);
      let json = await res.json();
      setWeatherData(json);
    };
    makeApiCall();
  }, [ipData]);
  return (
    <div>
      <WeatherInfo weatherData={weatherData} />
      <Switch>
        <Route exact={true} path="/" component={MainPage} />
        <Route exact path="/modelx" component={Modelx} />
        <Route exact path="/modely" component={Modely} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
