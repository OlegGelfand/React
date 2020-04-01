import React, {useContext} from 'react';
import './WeatherInfo.css'
// import {MyProps} from '../App/App'

function WeatherInfo(props){  
  // console.log("weatherinfo-props",MyProps)
  if (!props.weatherData.main) {
    return <></>}
    console.log("fetched", props);
  // const myProps = useContext(MyProps);
  // console.log("weather-MyProps", myProps.weatherData)

  //  let dataSet = props.weatherData.map(data =>{
      
    return ( 
      <div className ="weather">
       
             <h2>Local Weather: {props.weatherData.name}</h2> 
            <h2>Current Temperature: {props.weatherData.main.temp}</h2> 
            {/* <h2>Weather Description: {props.weatherData.weather[0].description}</h2> */}
            {/* <h3>{dataSet(props.main.temp)}</h3> */}
         </div>

          
   );
  } 
  // if(!props.recipes.hits){
  //   return <></>}
  //   const recipeList = props.recipes.hits.map((card, i) => {
  //       return (
  //       <div key={i}>
  //       </div>
  
  // if (myProps !== undefined) {
  //   console.log("hey I have stuff! ", myProps.weatherData)
  // }
  

  // const response = (temp)=> {
  //   if(temp > 70) {
  //    return ("it's nice and warm " + temp + " take a drive")
  //  } else if (temp > 50) {    return ("so it's a bit chilly " + temp + "  we've got you covered")
  //   } else {
  //    return ("so it's " + temp + " we have central heating")
  //   }
    // return (
    //   <div>
    //   <ul>{dataSet}</ul>
    // </div>
    // )
  
 
    
//  if (MyProps.WeatherData.name) {
        
        
       
      // } else {
      //   return (
           
      //   <></>    
      //   )
   

  




;
  export default WeatherInfo;