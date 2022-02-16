import React from 'react';

export default function WeatherList({ forecast }) {
  function date(dt) {
    return new Date(dt * 1000).toUTCString();
  }
  return (
    <div>
      {forecast.map((weather, i) => <div key={weather.dt + i}>
        <p>Date: {date(weather.dt)}</p>
        <p>Clouds: {weather.clouds}</p>
        {/* <p>Temperature: {weather.temp}</p> */}
        <p>Wind Speed: {weather.wind_speed}</p>
      </div>)}
    </div>
  );
}
