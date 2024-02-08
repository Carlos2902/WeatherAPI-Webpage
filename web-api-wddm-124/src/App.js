import React, {useState} from "react";
import axios from "axios";
import index from './index.css';

function App() {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=df8fcec4a7e7f8518aac0b288b52501a`
  return (
    <div className="app">
      <div className="container">
        <div className="top">

          <div className="location">
            <p>Toronto</p>
          </div>
          
          <div className="temp">
            <h2>2°C</h2>
          </div>

          <div className="description">
            <p>Clouds</p>
          </div>
        </div>

        <div className="bottom">
            <div className="feels">
              <p className="bold">-1°C</p>
              <p>Feels Like</p>
            </div>
            <div className="humitidy">
              <p className="bold">2%</p>
              <p>Humitidy</p>
            </div>
            <div className="wind">
            <p className="bold">12MPH</p>
            <p>Wind Speed</p>
            </div>
        </div>

      </div>
    </div>
  );
}

export default App;


