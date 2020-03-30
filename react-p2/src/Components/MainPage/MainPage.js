import React from 'react';
import './MainPage.css';

function MainPage() {
    return (
      
        <div className="background-images">
          <div className="firstcar">
             <img className="zoom" id="child" src="https://www.tesla.com/ns_videos/hp_2019/main-hero-desktop.jpg" alt="img1" /> 
             </div>
          <div className="threecars">
            <img id="child" src="https://www.tesla.com/ns_videos/homepage/homepage_energy_hero_desktop.jpg" alt="img2" />
            <video id="child" width="100%" height="800" controls autoplay onload className="source">
            <source src="https://www.tesla.com/ns_videos/accessories-hero-desktop.mp4" type="video/mp4"></source>
            </video>
            <img id="child" src="https://www.tesla.com/sites/tesla/files/curatedmedia/blue-hero-desktop.jpg" alt="img3" />
          </div>
      
      </div>
    );
  }
  
  export default MainPage;