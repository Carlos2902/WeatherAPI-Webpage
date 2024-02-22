import React, {useState} from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import index from './index.css';

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=df8fcec4a7e7f8518aac0b288b52501a`

  const searchLocation = () => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      searchLocation();
    }
  };



  return (
    <div className="app">
      <div className="search">
      <FaSearch className="search-icon" onClick={searchLocation} />

      <input 
      type="text"
      value={location}
      onChange={event => setLocation(event.target.value)}
      onKeyPress={handleKeyPress}
      placeholder="Enter Location"
      />
    </div>
    

      <div className="container">
        <div className="top">

          <div className="location">
            <p>{data.name}</p>
          </div>
          
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()} °C</h1> : null}
            {/* It is accessing first to the child of main (temp). Hence
            the value, is undefined, to fix it ... I add a conditional*/}
           
          </div>

          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p>: null}
          </div>
        </div>


        {/* If the search bar is not undefined, render the content */}
        {data.name != undefined &&
        <div className="bottom">
            <div className="feels">
              {data.main ? <p className="bold">{data.main.feels_like.toFixed()} °C</p>:null}
              <p>Feels Like</p>
            </div>
            <div className="humitidy">
            {data.main ? <p className="bold">{data.main.humidity} %</p>:null}
              <p>Humitidy</p>
            </div>
            <div className="wind">
            {data.wind ? <p className="bold">{data.wind.speed} MPH</p>:null}
            <p>Wind Speed</p>
            </div>
        </div>
        } 

      </div>
    </div>
  );
}

export default App;


