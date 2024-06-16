// src/components/Weather.js
import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../WeatherService'; 
import { WiHumidity } from "react-icons/wi";
import { FaLocationDot } from "react-icons/fa6";
import './index.css';

const Weather = ({ theme }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('London'); // Default city
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeather(city);
        setWeatherData(data);
        setError('');
      } catch (error) {
        setError(error.message);
      }
    };

    getWeather();
  }, [city]);

  const handleCityChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCitySubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      setCity(inputValue);
    }
  };

 

  if (!weatherData) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div className="error">{error}</div>;
  }
  const { main, wind, weather } = weatherData;
  const weatherDescription = weather[0].description;
  const iconUrl = `http://openweathermap.org/img/wn/${weather[0].icon}.png`; 


  console.log(weatherData)

  return (
    <div className={`weather-container ${theme}`}> 


    <header>
    
    </header>
      <form onSubmit={handleCitySubmit}>
        <input 
        className='input'
          type="text"
          value={inputValue}
          onChange={handleCityChange}
          placeholder="Enter city"
        />
        <button className='button' type="submit">Get Weather</button> 
       <div className='box'>
       <h1 className='city'>{city}</h1>

<FaLocationDot size={30}/>
       </div>
      </form>
      <div className="weather-info">
       
      <div className='box'>
      <p className='sub-heading'>Temperature: {main.temp}°C   </p> 
      
      </div>

       <div className='box'>
       <p className='sub-heading'>Humidity: {main.humidity}% </p>
        < WiHumidity size={30}/>
       </div>
        <p className='sub-heading'>Wind Speed: {wind.speed} m/s</p>
        <p className='sub-heading'>Weather Description: {weatherDescription}</p>
        <img className='icon' src={iconUrl} alt={weatherDescription} />
      </div>
    </div>
  );
};

export default Weather;
