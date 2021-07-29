import React, { useState } from 'react'

export const Input = ({name, typeInput, inputStyle, placeholder, InputIcon, value, onChange }) => {
    const [ valueInput , setvalueInput ] = useState('')
    const handleSetRfcGeneric = ( evt ) => {
        evt.preventDefault();
        ( name === 'rfc' ) && setvalueInput('RFCGENERIC');
    }
    return (
        <>
        <div className="__input_wrapper">
            <input
                name = {name} 
                autoComplete ="false" 
                className = {inputStyle}  
                type={typeInput} 
                placeholder={placeholder}
                value = { valueInput.length > 0  ? valueInput : value }
                onChange={onChange}
            />
            {
                !!InputIcon && <InputIcon />
            }
        </div>
        {
            name === 'rfc' 
                &&  <div className="__form_button_generic_rfc">
                        <button onClick = { handleSetRfcGeneric } className="__btn __btn_not_border">Generar RFC genérico</button>
                    </div> 
        }
        </>
    )
}
