import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";

function MainPage(props) {
  return (
    <div>
      <div>
        <div className="drop-down">
          <button className="drop-btn">Tesla</button>
          <div className="drop-down-content">
            <div className="nav">
              <a className="home" href=" ">
                {" "}
                Tesla
              </a>
              <a href=" ">Model S</a>
              <a href=" ">Model 3</a>
              <Link to="/Modelx">Model X</Link>
              <Link to="/Modely">Model Y</Link>
              <a href=" ">Model S</a>
              <span>
                <a className="nav-2" href=" ">
                  {" "}
                  Shop{" "}
                </a>
                <a className="nav-2" href=" ">
                  {" "}
                  Sign In{" "}
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    <div className="images">
      <img
        className="hero-image"
        id="zoom"
        src="https://www.tesla.com/ns_videos/hp_2019/main-hero-desktop.jpg"
        alt="img1"
      />

      <img
        className="hero-image"
        id="hero-image-one"
        src="https://www.tesla.com/ns_videos/homepage/homepage_energy_hero_desktop.jpg"
        alt="img2"
      />

      {/* <div>
        <video controls autoPlay className="hero-video">
          <source
            src="https://www.tesla.com/ns_videos/accessories-hero-desktop.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div> */}

      <img
        className="hero-image"
        id="hero-image-two"
        src="https://www.tesla.com/sites/tesla/files/curatedmedia/blue-hero-desktop.jpg"
        alt="img3"
      />
    </div>
    </div>
  );
}

export default MainPage;
