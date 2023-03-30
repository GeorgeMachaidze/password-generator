import "./App.css";

import React, { useState,useRef,useEffect } from "react";

function App() {
  

  const [value, setValue] = useState(0);
  const [upperCase, setUpperCase] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [title, setTitle] = useState('P4$5W0rD!');
  const [color, setColor] = useState('rgba(129, 125, 146, 1)');
  const copyText = useRef(null);
  const [text, setText] = useState('')
  const [backgroundColor1, setBackgroundColor1] = useState('rgba(24, 23, 31, 1)');
  const [strengthText, setStrengthText] = useState('')
  
let allIsTrue = upperCase && lowerCase && numbers && symbols;
let threeIsTrue = (!upperCase && lowerCase && numbers && symbols)  || (upperCase && !lowerCase && numbers && symbols)  || (upperCase && lowerCase && !numbers && symbols)  || (upperCase && lowerCase && numbers && !symbols);
let twoIsTrue = (!upperCase && !lowerCase && numbers && symbols)  || (upperCase && lowerCase && !numbers && !symbols)  || (!upperCase && lowerCase && numbers && !symbols) || (upperCase && !lowerCase && !numbers && symbols) || (upperCase && !lowerCase && numbers && !symbols) || (!upperCase && lowerCase && !numbers && symbols);
let oneIsTrue = (upperCase && !lowerCase && !numbers && !symbols) || (!upperCase && lowerCase && !numbers && !symbols) || (!upperCase && !lowerCase && numbers && !symbols) || (!upperCase && !lowerCase && !numbers && symbols);



  function changeDivColor(){
    if(allIsTrue){
      setBackgroundColor1("rgba(164, 255, 175, 1)")
      setStrengthText("STRONG")
    }else if(threeIsTrue){
      setBackgroundColor1("rgba(248, 205, 101, 1)")
      setStrengthText("MEDIUM")
    }else if(twoIsTrue){
      setBackgroundColor1("rgba(251, 124, 88, 1)")
      setStrengthText("WEAK")
    }else if(oneIsTrue){
      setBackgroundColor1("rgba(246, 74, 74, 1)")
      setStrengthText("TOO WEAK")
    }
  }
  

  function handleCopy(){
    const text = copyText.current.textContent;
    navigator.clipboard.writeText(text);
    setText('COPIED')
    setTimeout(() => {
      setText('');
    }, 2000);
  }

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

 
  function handleClick(){
    if(value === 0){
      setTitle("Please enter value")
    }else{
      const newPassword = generetePassword(upperCase, lowerCase, numbers, symbols, value);
      changeDivColor();
      setColor('#E6E5EA');
    }
   
    
  }

  function generetePassword(upperCase, lowerCase, numbers, symbols, value){
      let generatedPassword = "";
      let variationsCount = 0;
      if(upperCase){
        variationsCount++;
      }if(lowerCase){
        variationsCount++;
      }if(numbers){
        variationsCount++;
      }if(symbols){
        variationsCount++;
      }
      if(!upperCase && !lowerCase && !numbers && !symbols){
        for(let i = 0; i < value; i++)
        generatedPassword += lowerCaseLetter();
      }else{
    for(let i = 0; i < value; i += variationsCount){
      if(upperCase) {
        generatedPassword += upperCaseLetter();
      }
      if(lowerCase) {
        generatedPassword += lowerCaseLetter();
      }
      if(numbers) {
        generatedPassword += getRandomNumber();
      }
      if(symbols) {
        generatedPassword += getRandomSymbol();
      }
      
    }
  }
    const finalPassword = generatedPassword.slice(0, value);
    return setTitle(finalPassword);
  }

  function upperCaseLetter(){
    let charCode = Math.floor(Math.random() * (65 - 90 + 1)) + 90;
    let upperCaseLetter = String.fromCharCode(charCode);
    return upperCaseLetter;
  }
  function lowerCaseLetter() {
    let charCode = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
    let lowerCaseLetter = String.fromCharCode(charCode);
    return lowerCaseLetter;
  }
  function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 10);
    return randomNumber;
  }
  function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    let generetedSymbols = symbols[Math.floor(Math.random() * symbols.length)];
    return generetedSymbols;
  }

  return (
    <div className="App">
      <h1>Password Generator</h1>

      <div className="passwordBox">
        <p style={{ color }} ref={copyText}>{title}</p>
        <div className="copy">
          <p>{text}</p>
        <svg onClick = {handleCopy}className="copyIcon" width="21"height="24"xmlns="http://www.w3.org/2000/svg"><path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z"fill="#A4FFAF"/>
        </svg>
        </div>
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
            <p className="lvl">{strengthText}</p>
            <div className="rectangels">
              <div className="firstRec rec"style={{ backgroundColor: allIsTrue || threeIsTrue || twoIsTrue || oneIsTrue ? backgroundColor1 : "" }}></div>
              <div className="secondRec rec"style={{ backgroundColor: allIsTrue || threeIsTrue || twoIsTrue ? backgroundColor1 : ""  }}></div>
              <div className="thirdRec rec"style={{ backgroundColor: allIsTrue || threeIsTrue ? backgroundColor1 : ""  }}></div>
              <div className="fourthRec rec" style={{ backgroundColor: allIsTrue ? backgroundColor1 : "" }}></div>

            </div>
          </div>
        </div>
       
          <button onClick={handleClick}>
            <p>GENERATE</p>
            <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path fill="#24232C" d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"/></svg>
          </button>
        </div>
      </div>
    
  );
}

export default App;
