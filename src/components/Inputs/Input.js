import React, { useState } from 'react';

import { IconNotViewPassword } from '../iconos/IconNotViewPassword';
import { IconViewPassword } from '../iconos/IconViewPassword';

export const Input = ({name, typeInput, inputStyle, placeholder, InputIcon, value, onChange, setValue, formValues }) => {
    const [ type, setType ] = useState( typeInput );
    const handleSetRfcGeneric = ( evt ) => {
        evt.preventDefault();
        ( name === 'rfc' ) && setValue({...formValues, ...{ rfc:'XAXX010101000' } });
    }
    const handleToggleViewPassword = ( evt ) => {
        evt.preventDefault();
        setType( ( type === 'password' ) 
                    ? 'text' : 
                    'password' 
                );
    }
    return (
        <>
        <div className="__input_wrapper">
            <input
                name = {name} 
                autoComplete ="false" 
                className = {inputStyle}  
                type = { type} 
                placeholder = {placeholder}
                value = { value }
                onChange = {onChange}
            />
            {
                !!InputIcon && <InputIcon />
            }
            {
                ( typeInput === 'password' )
                    && <span onClick = { handleToggleViewPassword } className ="__btn __btn_password">
                            {
                                ( type === 'password')
                                    ? <IconViewPassword />
                                    :<IconNotViewPassword />
                            }
                        </span>
            }
        </div>
        {
            name === 'rfc' 
                &&  <div className="__form_button_generic_rfc">
                        <span onClick = { handleSetRfcGeneric } className="__btn __btn_not_border">Generar RFC genérico</span>
                    </div> 
        }
        
        </>
    )
}
