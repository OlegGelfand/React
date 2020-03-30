import React, {useState, useEffect} from 'react';
import './App.css';
import Footer from "../Footer/Footer"
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import Form from "../Form/Form";
import MainPage from "../MainPage/MainPage";
import Header from '../Header/Header';
import Modelx from '../Modelx/Modelx';
import Modely from '../Modely/Modely';
import { Route, Switch } from "react-router-dom";



function App(props) {
     const [zipCodeData, setZipCodeData] = useState({});
    const [zipInput, setZipInput] = useState("");
   
    const handleSubmit = async zipcode => {
      //async allows a function to manage promis
      setZipInput(zipcode);
    }
  useEffect(() => {
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipInput}&APPID=a9f8438c3882d0e191b7bf55cd22433f`;
    const makeApiCall = async () => {
      const res = await fetch(weatherUrl);
      const json = await res.json();
      // console.log(json);
      setZipCodeData(json);
    };
    makeApiCall();
  }, [zipInput]);



  return (
    <div className="App">
      <Header />
      <Form handleSubmit={handleSubmit} />
      <WeatherInfo zipcode={zipCodeData} />
     
      {/* <Footer /> */}
     <Switch>
        <Route exact={true} path="/" component={MainPage} />
        <Route exact path="/modelx" component={Modelx} />
        <Route exact path="/modely" component={Modely} />
      </Switch>
  
   </div>
  );
}

export default App;
