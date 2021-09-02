import { useEffect } from 'react'
import { useState } from 'react';

export const useChangeSelect = (initialState = {}) => {
    const [ inputFormValues, setInputFormValues] = useState( initialState );

    const handdleSelectChange = ( evt ) => {
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
    }, [inputFormValues.land,setInputFormValues ])
    useEffect(() => {
        setInputFormValues({...inputFormValues,...{country:0 }})
    }, [inputFormValues.state,setInputFormValues ])

    return [ inputFormValues,setInputFormValues, handdleSelectChange,setInputFormValues ];
    
}
