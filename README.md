This is a simple weather application built with React.js that displays the current weather information including temperature, humidity, wind speed, and weather description. It allows users to switch between dark and light modes and change the city to get weather updates for different locations.

Features
Display current date and time
Show weather information: temperature, humidity, wind speed, and weather description
Change the city to get weather updates for different locations
Toggle between dark and light modes
Screenshots


Getting Started
These instructions will help you set up and run the project on your local machine.

Prerequisites
Node.js (v12 or higher)
npm (v6 or higher)
Installation
Clone the repository:
bash
Copy code
git clone https://github.com/saikumarkindigeriDev/weather-app.git
cd weather-app
Install the dependencies:
bash
Copy code
npm install
Obtain an API key from OpenWeatherMap and add it to the project:

Create a file named WeatherService.js in the src directory.
Add your API key to the file:
javascript



Copy code
// src/WeatherService.js
const API_KEY = 'your_openweathermap_api_key';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async (city) => {
  const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return response.json();
};
Running the App
Start the development server:
bash
Copy code
npm start
