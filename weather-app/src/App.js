import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';
import SearchBar from './Components/SearchBar/SearchBar';
import Main from './Containers/Main/Main';

function App() {

  const [searchQuery, setSearchQuery] = useState("");
  const [weatherData, setWeatherData] = useState([]);


  const fetchWeatherData = async () => {
    const apiKey = "6de494309a82496faf4130741232504";
    const url = `https://api.weatherapi.com/v1/current.json?key=6de494309a82496faf4130741232504&q=${searchQuery}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData([data]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInput = (event) => {
    setSearchQuery(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherData();
  };


  return (
    <div className="App">
      <header className="App-header">
      <SearchBar searchTerm={searchQuery} handleInput={handleInput} handleSubmit={handleSubmit} />
      <Main weatherCards={weatherData} />
      </header>
    </div>
  );
}

export default App;
