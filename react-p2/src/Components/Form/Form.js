// import React, { useState } from 'react';
// import './Form.css';

// function Form(props) {
//     const [zipCode, setZipCode] = useState("");
//     const handleSubmit = e => {
//         e.preventDefault();
//         props.handleSubmit(zipCode);       //  we are setting it to an empty string so that when the info comes in they get a fresh field to fill out
//         setZipCode("");
//     };
//     const handleChange = e => {
//         const code = e.target.value;
//         setZipCode(code);
//       };
//   return (
//       <div className ="form">
//       <form onSubmit={handleSubmit}>
//       <input type="submit" value="Where do you want to go?" />
//         <input id="ZipCode" type="text" value={zipCode} onChange={handleChange} />
        
//       </form>
//       </div>
//     );
    
// };
  

  // export default Form;

