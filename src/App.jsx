import React, { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

function App() {
  const [weather, setWeather] = useState(null);

  return (
    <div className="App min-h-screen w-full flex flex-col items-center p-4 bg-yellow-100">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">Weather App</h1>
      
      <SearchBar setWeather={setWeather} />

      {weather && (
        <div className="mt-6 w-full max-w-md">
          <WeatherCard weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;
