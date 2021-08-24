import React from 'react'

export const InputSelect = ({ name, value, onChange, arrayData, textDefault, keyName, optionDefault = 1 }) => {
    return (
        <>
        <select 
            name = { name } 
            onChange = {  onChange } 
            className = "__input"
            value = { optionDefault }
            >
            <option value = { 0 } > --{ textDefault }</option>
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
        {/* {
            name === 'land' && <img className="flag" src="https://restcountries.eu/data/mex.svg"/>
        } */}
        </>
    )
}
