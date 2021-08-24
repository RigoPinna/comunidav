import React, { useEffect } from 'react'
import { useState } from 'react';

export const useChangeSelect = (initialState = {}) => {
    const [ inputFormValues, setInputFormValues] = useState( initialState );

    const handdleSelectChange = ( evt, sendForm ) => {
        evt.preventDefault();
        const inputName = evt.target.name;
        const inputValue = evt.target.value;
        setInputFormValues({
            ...inputFormValues, 
            ...{ [inputName]: inputValue} 
        });
       
    }
    useEffect(() => {
        setInputFormValues({...inputFormValues,...{state:0 }})
    }, [inputFormValues.land ])
    useEffect(() => {
        setInputFormValues({...inputFormValues,...{country:0 }})
    }, [inputFormValues.state ])

    return [ inputFormValues, handdleSelectChange,setInputFormValues ];
    
}
