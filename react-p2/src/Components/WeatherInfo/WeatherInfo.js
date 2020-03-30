import React from 'react';
import './WeatherInfo.css'

function WeatherInfo(props){  
    if (props.zipcode.name) {
        return ( 
          <div className ="weather">
                <p>Local Weather: {props.zipcode.name}</p>
                <p>Current Temperature: {props.zipcode.main.temp}</p>
                <p>Weather Description: {props.zipcode.weather[0].description}</p>
                <p>Min-Temp: {props.zipcode.main.temp_min} F / Max-Temp:{props.zipcode.main.temp_max} F</p>
          </div>
        );
      } else {
        return (
           
        <div className ="weather">
            <p>Local Weather: </p>
            <p>Current temperature: F</p>
            <p>Weather Description: </p>
            <p>Current temperature:</p>
            <p> Min-Temp: F / Max-Temp: F</p>
          </div>    
    );
    }
}
  
  export default WeatherInfo;