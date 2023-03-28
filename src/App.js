import './App.css';

import React, { useState } from 'react';
import RangeInput from './range-input';
import TextInput from './text-input';
import ChecxboxForUpperCase from './check-box-for-upper-case';
import ChecxboxForLowerCase from './check-box-for-lower-case';
import ChecxboxForNumbers from './check-box-for-number';
import ChecxboxForSymbols from './check-box-for-symbols';


function App() {
  return (
    <div className="App">
      <h1>Password Generator</h1>
      
        <div className='passwordBox'>
          <TextInput/>
          <svg className="copyIcon" width="21" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" fill="#A4FFAF"/></svg>     
        </div>

        <div className='mainBox'>
          <div className='firstSection'>
        <RangeInput/>
          </div>
          <div className='checkBoxes'>
            <ChecxboxForUpperCase/>
            <ChecxboxForLowerCase/>
            <ChecxboxForNumbers/>
            <ChecxboxForSymbols/>
          </div>
          <div className='secondSection'>
            <p>STRENGTH</p>
            <div className='lvlDiv'>
                <p className='lvl'></p>
                <div className='rectangels'>
                  <div className='firstRec rec'></div>
                  <div className='secondRec rec'></div>
                  <div className='thirdRec rec'></div>
                  <div className='fourthRec rec'></div>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
