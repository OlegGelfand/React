import React from 'react';

import { Link } from "react-router-dom";
import './Modely.css';


function Modely() {
    return (
    
        <div>
            
            <div className="nav">
              <Link className="nav" to="/">
                      Tesla
              </Link>
              <a href="#" >Model S</a>
              <a href="#" >Model 3</a>
              
              <Link className="nav" to="/Modelx">
                      Model X
              </Link>
             
              <a href="#" >Solar Roof</a>
              <a href="#" >Solar Panels</a>
              <a href="#" >Model S</a>
           <span>
              <a className="nav2" href="#"> Shop </a>
              <a className="nav2" href="#"> Sign In </a>
           </span>
            </div>
            <img className="heroImage" src="https://www.tesla.com/sites/tesla/files/curatedmedia/blue-hero-desktop.jpg" alt="img3" />
            
        
              
        
            
        
            
        </div>
      
    );
  }

  export default Modely;
  