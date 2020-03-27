import React from 'react';
import '../App.css';
import Header from "./Header"
import Footer from "./Footer"
import WeatherInfo from "./WeatherInfo";
import Form from "./Form";

function App(props) {
  return (
    <div className="App">
        <p>
        <Header />
       <WeatherInfo />
       <Footer />
        </p>
    </div>
  );
}

export default App;
