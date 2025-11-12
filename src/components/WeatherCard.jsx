import React from 'react';

function WeatherCard({ weather }) {
  if (weather.cod !== 200) {
    return <p>City not found.</p>;
  }

  return (
    <div>
      <h2>{weather.name}, {weather.sys.country}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Weather: {weather.weather[0].main}</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
