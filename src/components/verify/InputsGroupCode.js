import React from 'react'

export const InputsGroupCode = ({ c1, c2, c3,  handdleInputChange, codes }) => {
    return (
        <div className="__wrapper_codes_inputs">
            <input
                ref = {c1} 
                onChange={ handdleInputChange } 
                className ="__input_code" 
                type="text" 
                name="c1" 
                placeholder ="Code" 
                value = { codes.c1}/>
            <input
                ref = {c2}  
                onChange={ handdleInputChange } 
                className ="__input_code" 
                type="text" 
                name="c2" 
                placeholder ="Code" 
                value = {codes.c2}/>
            <input 
                ref = {c3} 
                onChange={ handdleInputChange } 
                className ="__input_code" 
                type="text" 
                name="c3" 
                placeholder ="Code" 
                value = {codes.c3}/>
        </div>
    )
}
