import React, { useState } from 'react';
import './Form.css';

function Form(props) {
    const [zipCode, setZipCode] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        props.handleSubmit(zipCode);       //  we are setting it to an empty string so that when the info comes in they get a fresh field to fill out
        setZipCode("");
    };
    const handleChange = e => {
        const code = e.target.value;
        setZipCode(code);
      };
  return (
      <div class ="form">
      <form onSubmit={handleSubmit}>
        <input id="ZipCode" type="text" value={zipCode} onChange={handleChange} />
        <input type="submit" value="Find local Weather" />
      </form>
      </div>
    );
    
};
  

  export default Form;

