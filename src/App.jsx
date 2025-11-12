import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

function App() {
  const [weather, setWeather] = useState(null);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <SearchBar setWeather={setWeather} />
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}

export default App;
