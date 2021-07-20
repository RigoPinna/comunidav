import React from 'react'

export const Input = ({name, typeInput, inputStyle, placeholder, InputIcon, value, onChange }) => {
    return (
        <div className="__input_wrapper">
            <input
                name = {name} 
                autoComplete ="false" 
                className = {inputStyle}  
                type={typeInput} 
                placeholder={placeholder}
                value = {value}
                onChange={onChange}
            />
            {
                !!InputIcon && <InputIcon />
            }
        </div>
    )
}
