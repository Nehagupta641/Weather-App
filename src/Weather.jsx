import React, { useState } from "react";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudSun,
  faTint,
  faWind,
  faGaugeHigh,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const Weather = () => {
  const [record, setRecord] = useState("");
  const [city, setCity] = useState("hyderabad");

  const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ff5dd558845ac498073f2e31d79542ac`;

  const date = new Date(record?.dt * 1000);

  const fetchdata = async () => {
    try {
      const res = await fetch(api);
      const data = await res.json();
      setRecord(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    const value = e.target.value;
    console.log(value);
    setCity(value);
  };

  return (
    <div className="mainpage">
      <div className="containerweather">
        <h1>Weather App</h1>
        <FontAwesomeIcon icon={faCloudSun} className="bigicon" />

        <div className="input_areaa">
          <input
            type="text"
            placeholder="Hyderabad"
            onChange={(e) => handleInput(e)}
          />
          <button className="add-btnn" onClick={fetchdata}>
            Search
          </button>
        </div>

        <div className="weatherbox">
          <div className="temp_area">
            <h2>{record?.main?.temp}</h2>
            <p>CLOUDS</p>
            <span> {record?.name}</span>
          </div>

          <div className="date_area">
            <h3>{date.toLocaleString() || "12/04/2025"}</h3>
            {/* <p>2:35:15 PM</p> */}
          </div>

          <div className="bottom_area">
            <div className="item">
              <FontAwesomeIcon icon={faSun} />
              <span>Sunset</span>
              <p>{new Date(record?.sys?.sunset * 1000).toLocaleTimeString()}</p>
            </div>

            <div className="item">
              <FontAwesomeIcon icon={faTint} />
              <span>Humidity</span>
              <p>{record?.main?.humidity}</p>
            </div>

            <div className="item">
              <FontAwesomeIcon icon={faGaugeHigh} />
              <span>Pressure</span>
              <p>{record?.main?.pressure}</p>
            </div>

            <div className="item">
              <FontAwesomeIcon icon={faWind} />
              <span>Wind</span>
              <p>{record?.wind?.speed}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
