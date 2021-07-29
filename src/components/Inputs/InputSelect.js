import React from 'react'

export const InputSelect = ({ name, value, onChange, arrayData, textDefault, keyName }) => {
    return (
        <select 
            name = { name } 
            onChange = {  onChange } 
            className = "__input"
            >
            <option value = { value } disabled = { true }> --{ textDefault }</option>
            {
               arrayData.length > 0
                    && arrayData.map( ({ id, value }) => {
                        return (<option 
                                    key = {`${keyName}-${id}`} 
                                    value ={ id } >
                                        { value }
                                </option> );
                    })
                    
            }
        </select>
    )
}
