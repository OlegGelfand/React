import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';


function Nav(props) {
    return (
      
          <div>
            <a href="#" >Model S</a>
            <a href="#" >Model 3</a>
            <Link className="nav-item" to="/Modelx">
                    Model X
            </Link>
            <Link className="nav-item" to="/Modely">
                Model Y
            </Link>
            <a href="#" >Solar Roof</a>
            <a href="#" >Solar Panels</a>
            <a href="#" >Model S</a>
         
            <a href="#"> Shop </a>
            <a href="#"> Sign In </a>
          </div>
    
    
    )
  }

  export default Nav;