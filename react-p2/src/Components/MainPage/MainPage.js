import React from 'react';
import './MainPage.css';
import { Link } from "react-router-dom";



function MainPage(props) {
  function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
    return (
      <div>
          

          <div className="nav">
            <a className="home" href=" "> Tesla</a>
            <a href=" " >Model S</a>
            <a href=" " >Model 3</a>
            <Link className="nav" to="/Modelx">
                    Model X
            </Link>
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
    
            
            
         

          
          <img className="heroImage" id="zoom" src="https://www.tesla.com/ns_videos/hp_2019/main-hero-desktop.jpg" alt="img1" /> 
          <button>buy me</button>
            <img className="heroImage" src="https://www.tesla.com/ns_videos/homepage/homepage_energy_hero_desktop.jpg" alt="img2" />
      
            <video controls autoPlay className="heroImage">
            <source  src="https://www.tesla.com/ns_videos/accessories-hero-desktop.mp4" type="video/mp4"></source>
            </video>
      
            <img className="heroImage" src="https://www.tesla.com/sites/tesla/files/curatedmedia/blue-hero-desktop.jpg" alt="img3" />
      
          
      </div>
    );
  }
  
  export default MainPage;