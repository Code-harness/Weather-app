import React, { useState } from 'react';

const API_KEY = 'd460c8640ea4eea0ec62e6bd90d3576c';

function SearchBar({ setWeather }) {
  const [city, setCity] = useState('');

  const handleSearch = async () => {
    if (!city) return;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();
    setWeather(data);
    setCity('');
  };

  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
