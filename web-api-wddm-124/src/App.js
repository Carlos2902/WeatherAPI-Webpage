import React, {useState} from "react";
import axios from "axios";

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
              <p>-1°C</p>
            </div>
            <div className="humitidy">
              <p>2%</p>
            </div>
            <div className="Wind">
              12 MPH
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;


