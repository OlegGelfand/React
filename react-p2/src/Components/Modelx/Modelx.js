import React from "react";
import { Link } from "react-router-dom";
import "./Modelx.css";

function Modelx() {
  return (
    <div>
            
            <div className="nav">
              <Link className="nav" to="/">
                      Tesla
              </Link>
              <a href=" " >Model S</a>
              <a href=" " >Model 3</a>
              
              
              <Link className="nav" to="/Modely">
                  Model Y
              </Link>
              <a href=" " >Solar Roof</a>
              <a href=" " >Solar Panels</a>
              <a href=" " >Model S</a>
           <span>
              <a className="nav2" href=" "> Shop </a>
              <a className="nav2" href=" "> Sign In </a>
           </span>
            </div>
          
            <img className="heroImage"src="https://www.tesla.com/ns_videos/homepage/homepage_energy_hero_desktop.jpg" alt="img2" />
        
              
        
            
        
            
        </div>
  );
}

export default Modelx;
