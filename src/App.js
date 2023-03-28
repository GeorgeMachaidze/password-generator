import "./App.css";

import React, { useState } from "react";

function App() {
  

  const [value, setValue] = useState(0);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleInput(event) {
    const input = event.target;
    const min = input.min || 0;
    const max = input.max || 100;
    const value = ((input.value - min) / (max - min)) * 100;
    input.style.background = `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${value}%, #18171F ${value}%, #18171F 100%)`;
  }
  function toggleUpperCase(){
    setUpperCase(!upperCase);
  }
  function toggleLowerCase(){
    setLowerCase(!lowerCase);
  }
  function toggleNumbers(){
    setNumbers(!numbers);
  }
  function toggleSymbols(){
    setSymbols(!symbols);
  }

  return (
    <div className="App">
      <h1>Password Generator</h1>

      <div className="passwordBox">
        <p>P4$5W0rD!</p>
        <svg className="copyIcon" width="21"height="24"xmlns="http://www.w3.org/2000/svg"><path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"fill="#A4FFAF"/>
        </svg>
      </div>

      <div className="mainBox">
        <div className="firstSection">
        <div className='inputDiv'>
        <div className='firstSection'>
        <label className='charLength' htmlFor="rangeInput">Character Length</label>
        <p className='number'>{value}</p>
        </div>
        <input type="range" id="rangeInput" name="rangeInput" min="0" max="20" value={value} onChange={handleChange} onInput={handleInput}/>
      </div>
        </div>
        <div className="checkBoxes">
          <div className="checkBox">
            <div className="cube" onClick={() => toggleUpperCase()}style={{ backgroundColor: upperCase ? "rgba(164, 255, 175, 1)" : "transparent"}}>
           
              <div className="svg1">
                {upperCase && (
                  <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8" />
                  </svg>
                )}
              </div>
            </div>
          <p>Include Uppercase Letters</p>
          </div>

          <div className="checkBox">
          <div className="cube" onClick={() => toggleLowerCase()}style={{ backgroundColor: lowerCase ? "rgba(164, 255, 175, 1)" : "transparent"}}>
           
           <div className="svg1">
             {lowerCase && (
               <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
                 <path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8" />
               </svg>
             )}
           </div>
         </div>
            <p>Include Lowercase Letters</p>
          </div>

          <div className="checkBox">
            <div className="cube" onClick={() => toggleNumbers()}style={{backgroundColor: numbers ? "rgba(164, 255, 175, 1)" : "transparent"}}>
              <div className="svg1">
                {numbers && (
                  <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8" />
                </svg>
                )}
              </div>
            </div>
            <p>Include Numbers</p>
          </div>

          <div className="checkBox">
          <div className="cube" onClick={() => toggleSymbols()}style={{backgroundColor: symbols ? "rgba(164, 255, 175, 1)" : "transparent"}}>
              <div className="svg1">
                {symbols && (
                  <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8" />
                </svg>
                )}
              </div>
            </div>
            <p>Include Symbols</p>
          </div>
        </div>

        <div className="secondSection">
          <p>STRENGTH</p>
          <div className="lvlDiv">
            <p className="lvl"></p>
            <div className="rectangels">
              <div className="firstRec rec"></div>
              <div className="secondRec rec"></div>
              <div className="thirdRec rec"></div>
              <div className="fourthRec rec"></div>
            </div>
          </div>
        </div>
        <div className="button">
          <button>
            <p>GENERATE</p>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
