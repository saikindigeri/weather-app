// src/App.js
import React, { useState } from 'react';
import Weather from './Components/Weather';
import Toggle from './Components/Toggle';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      <div className='header'>
      <Toggle theme={theme} toggleTheme={toggleTheme}  /> 
      <p className='sub-heading'> {new Date().toLocaleString()}</p>
     </div>
      <Weather />
    </div>
  );
};

export default App;
