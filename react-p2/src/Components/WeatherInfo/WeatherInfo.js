import React, {useContext} from 'react';
import './WeatherInfo.css'
// import {MyProps} from '../App/App'

function WeatherInfo(props){  
  // console.log("weatherinfo-props",MyProps)
  // const myProps = useContext(MyProps);
  if (!props.weatherData.main) {
    return <></>}
    console.log("fetched", props);
  
  // console.log("weather-MyProps", myProps.weatherData)

const temp = props.weatherData.main.temp

    const response = ()=> {
    if(props.weatherData.name==="Detroit"){
      return ("Teslas aren't sold in Michigan")
    } else if (temp > 70) {
     return ("it's a beautiful + temp + degree day outside, buy a tesla, live life well")
   } else if (temp > 50) {    return (" " + temp + "  we've got you covered")
    } else {
     return ("so it's " + temp  + " we have central heating")
    }    


  }
  

console.log('winfo', response )
    return ( 
      <div className ="weather">
       
             <h2>You are in: {props.weatherData.name}</h2> 
            <h2>and the temperature is: {props.weatherData.main.temp} degrees</h2> 
            <h2>your weather: {props.weatherData.weather[0].description}</h2>
            <h3>{response()}</h3>
            
         </div>

          
   );
  } 
 
  // if (myProps !== undefined) {
  //   console.log("hey I have stuff! ", myProps.weatherData)
  // }
  


  
 
    
//  if (MyProps.WeatherData.name) {
        
        
       
      // } else {
      //   return (
           
      //   <></>    
      //   )
   






;
  export default WeatherInfo;