import React, {useContext} from 'react';
// import Form from "../Form/Form"
import WeatherInfo from "../WeatherInfo/WeatherInfo"
import  './MainForm.css'
// import {MyProps} from '../App/App'

function MainForm(props) {
//       const myProps = useContext(MyProps)
// console.log("myProps from mainForm: ",myProps)
return (
<div className="mainForm">
{/* <Form handleSubmit={props.handleSubmit} /> */}
      <WeatherInfo weatherData={props.weatherData} />
</div>
)
}
export default MainForm;