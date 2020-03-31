import React from 'react';
import Form from "../Form/Form"
import WeatherInfo from "../WeatherInfo/WeatherInfo"
import  './MainForm.css'

function MainForm(props) {

return (
<div className="mainForm">
<Form handleSubmit={props.handleSubmit} />
      <WeatherInfo zipcode={props.zipCodeData} />
</div>
)
}
export default MainForm;