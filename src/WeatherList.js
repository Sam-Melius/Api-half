import React from 'react';

export default function WeatherList({ forecast }) {
  return (
    <div>
      {forecast.map((weather, i) => <div key={weather.dt + i}>
        <p>Date: </p>
      </div>)}
    </div>
  );
}
