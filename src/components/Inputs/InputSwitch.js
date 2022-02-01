import React from 'react'

export const InputSwitch = ({ text, hanldeActive=()=>{}, idSwitch, checked }) => {

    const handdleInputChange = () => {
        hanldeActive();
    }
    return (
        <div className="__input_switch">
            <p>{ text }</p>
            <div className="switch-container">
                <input
                    checked={ checked }
                    onChange={ handdleInputChange } 
                    type="checkbox" 
                    id={idSwitch} />
                <label htmlFor={idSwitch} className="switch-label">
                    <div className="switch-rail">
                    <div className="switch-slider"></div>
                    </div>    
                </label> 
            </div>
        </div>
    )
}
