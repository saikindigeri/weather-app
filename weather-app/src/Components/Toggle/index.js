// src/components/Toggle.js
import React from 'react';

import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import './index.css';

const Toggle = ({ theme, toggleTheme }) => {
  return (
    <button onClick={toggleTheme} className={`toggle ${theme}`}>
      {theme === 'light' ? <MdDarkMode className='icon'/> : <MdLightMode className='icon'/>}
    </button>
  );
};

export default Toggle;
