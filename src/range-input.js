import React, { useState } from 'react';

function RangeInput() {
    const [value, setValue] = useState(0);
  
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
  
    return (
      <div className='inputDiv'>
        <div className='firstSection'>
        <label className='charLength' htmlFor="rangeInput">Character Length</label>
        <p className='number'>{value}</p>
        </div>
        <input
          type="range"
          id="rangeInput"
          name="rangeInput"
          min="0"
          max="20"
          value={value}
          onChange={handleChange}
          onInput={handleInput}
        />
      </div>
    );
  }
  export default RangeInput;