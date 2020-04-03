import React from "react";
import { Link } from "react-router-dom";
import "./Modelx.css";
import "../App/App.css";

function Modelx(props) {
  return (
    <div>
      <div>
        <div className="drop-down">
          <button className="drop-btn">Tesla</button>
          <div className="dropdown-content">
            <div className="nav">
              <Link className="home" to="/">
                Tesla
              </Link>
              <a href=" ">Model S</a>
              <a href=" ">Model 3</a>
              <Link to="/Modely">
                Model Y
              </Link>
              <a href=" ">Model S</a>
              <span>
                <a href=" ">
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
        className="hero-image-x"
        src="https://www.tesla.com/sites/default/files/modelsx-new/sx-specs/MX-specs-desktop.jpg"
        alt="img3"
      />
      <img
        className="x"
        src="https://boygeniusreport.files.wordpress.com/2017/12/tesla-model-x-black.jpg?quality=98&strip=all&w=1200"
        alt="img3"
      />
    </div>
  );
}

export default Modelx;
