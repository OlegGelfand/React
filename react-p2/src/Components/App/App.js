import React, {useState, useEffect, createContext} from 'react';
import './App.css'
import MainPage from "../MainPage/MainPage";
import Modelx from '../Modelx/Modelx';
import Modely from '../Modely/Modely';
import { Route, Switch } from "react-router-dom";
import MainForm from "../MainForm/MainForm"





function App(props) {
     const [weatherData, setWeatherData] = useState({});
    // const [zipInput, setZipInput] = useState("");
    const [ipData, setIPData] = useState('');
    // const handleSubmit = async zipcode => {
    //   //async allows a function to manage promis
    //   setZipInput(zipcode);
    // }
    useEffect(() => {
      const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
      const ipAddressUrl = `http://gd.geobytes.com/GetCityDetails`;
      const makeIPApiCall = async () => {
        const response = await fetch(`${proxyUrl}${ipAddressUrl}`
        );
        let resText = await response.text();
        let json = JSON.parse(resText);
        setIPData(json);
        
      }
      makeIPApiCall();
    }, []);
    console.log('ipData', ipData)
    console.log("CIty stuff:  ",ipData.geobytesfqcn)
   
  useEffect(() => {   
    const addressInfo = ipData.geobytesfqcn;
console.log("Address info", addressInfo, typeof addressInfo)
    
    const makeApiCall = async () => {
      const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${addressInfo}&units=imperial&appid=2131099a42792e2c63be3eb785ae1ccd`;
      const res = await fetch(weatherUrl
      );
      let json = await res.json();
      console.log("RESTEXT", json)
  
      // console.log(json);
      setWeatherData(json);
    }
    makeApiCall();
  }, [ipData]);
  console.log("some cool shit: ", weatherData)





  return (
    <div >
  {/* <MyProps.Provider value={
    {
    weatherData
    }
}> */}

<MainForm weatherData={weatherData}/>
{/* <WeatherInfo /> 
</MyProps.Provider>  */}
  
     <Switch>
        <Route exact={true} path="/" component={MainPage} />
        <Route exact path="/modelx" component={Modelx} />
        <Route exact path="/modely" component={Modely} />
      </Switch>
      
   </div>
  );
}


export default App;
export const MyProps =createContext();
