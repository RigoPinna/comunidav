import React from 'react'

export const InputRadioSecondary = ({ text,Icon,id, name, checked, onClick }) => {
    return (
        <div className="__input_radio">
            <input
                onClick = { onClick } 
                defaultChecked={ checked } 
                type ="radio" 
                id={ id } 
                name={ name }/>
            <label htmlFor={ id }>
                { !!Icon && <Icon /> }
                { text }
            </label>
        </div>
    )
}
