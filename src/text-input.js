import React, { useState } from 'react';

function TextInput(){
    const [value, setValue] = useState('');
  
    function handleChange(event){
      setValue(event.target.value)
    }
  
    return (
      
      <div>
      <input
        className='textInput'
        type="text"
        id="textInput"
        name="textInput"
        placeholder="P4$5W0rD!"
        value={value}
        onChange={handleChange}
      />
    </div>
    );
  }
  export default TextInput;