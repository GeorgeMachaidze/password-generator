import React, { useState } from 'react';


function ChecxboxForLowerCase(){
    const [checked, setChecked] = useState(false);

    function handleChange(event){
        setChecked(event.target.checked);
    }

    return (
        <div className='checkBox '>
               <input
            type="checkbox"
            id="checkboxInput"
            name="checkboxInput"
            checked={checked}
            onChange={handleChange}
            />
              <span className="checkbox-icon">
                <i className="fas fa-check"></i>
              </span>
            <p>Include Lowercase Letters</p>
        </div>
    )
}


export default ChecxboxForLowerCase 