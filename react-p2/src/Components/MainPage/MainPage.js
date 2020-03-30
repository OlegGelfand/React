import React from 'react';
import './MainPage.css';
import Modely from '../Modely/Modely';
import Modelx from '../Modelx/Modelx';


function MainPage(props) {
    return (
      <body>
      <div className="threecars">
             <img src="https://www.tesla.com/ns_videos/hp_2019/main-hero-desktop.jpg" alt="img1" /> 
            <img src="https://www.tesla.com/ns_videos/homepage/homepage_energy_hero_desktop.jpg" alt="img2" />
            <video width="100%" height="800" controls autoplay onload className="source">
            <source src="https://www.tesla.com/ns_videos/accessories-hero-desktop.mp4" type="video/mp4"></source>
            </video>
            <img id="child" src="https://www.tesla.com/sites/tesla/files/curatedmedia/blue-hero-desktop.jpg" alt="img3" />
          </div>
      </body>
    );
  }
  
  export default MainPage;