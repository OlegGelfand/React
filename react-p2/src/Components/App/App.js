import React, {useState, useEffect} from 'react';
import './App.css';
import Footer from "../Footer/Footer"
import WeatherInfo from "../WeatherInfo/WeatherInfo";
import Form from "../Form/Form";
import MainPage from "../MainPage/MainPage";
import Header from '../Header/Header';

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
      <MainPage />

      <Footer />
    </div>
    
  );
}

export default App;
