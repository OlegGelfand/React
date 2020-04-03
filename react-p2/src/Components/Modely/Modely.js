import React from "react";
import { Link } from "react-router-dom";
import "./Modely.css";

function Modely() {
  return (
    <div>
      <div>
        <div className="drop-down">
          <button className="drop-btn">Tesla</button>
          <div className="drop-down-content">
          <div className="nav">
            <Link className="home" to="/">
              Tesla
            </Link>
            <a href=" ">Model S</a>
            <a href=" ">Model 3</a>

            <Link to="/Modelx">
              Model X
            </Link>
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
      <img
        className="hero-Image-Y"
        id="image-1"
        src="https://images.barrons.com/im-118311?width=620&size=1.5"
        alt="model-y"
      ></img>
      <img
        className="hero-Image-Y"
        id="image-2"
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/y2-1552654862.jpg"
        alt="modely"
      ></img>
    </div>
  );
}

export default Modely;
