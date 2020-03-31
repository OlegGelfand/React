import React from 'react';
import './WeatherInfo.css'

function WeatherInfo(props){  
    if (props.zipcode.name) {
        return ( 
          <div className ="weather">
                <h2>Local Weather: {props.zipcode.name}</h2>
                <h2>Current Temperature: {props.zipcode.main.temp}</h2>
                <h2>Weather Description: {props.zipcode.weather[0].description}</h2>
             
          </div>
        );
      } else {
        return (
           
        <div >
            {/* <h2>Local Weather: </h2>
            <h2>Current temperature: F</h2>
            <h2>Weather Description: </h2>
            <h2>Current temperature:</h2> */}
          
          </div>    
    );
    }
}
  
  export default WeatherInfo;