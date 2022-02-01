import { useEffect } from 'react'
import { useState } from 'react';

export const useChangeSelect = (initialState = {}) => {
    const [ inputFormValues, setInputFormValues] = useState( initialState );
    const [arrays, setArrays] = useState({lands:[], states:[], countries:[]})

    const handdleSelectChange = ( evt ) => {
        evt.preventDefault();
        const inputName = evt.target.name;
        const inputValue = evt.target.value;
        setInputFormValues({
            ...inputFormValues, 
            ...{ [inputName]: inputValue} 
        });
       
    }

    return [ inputFormValues, handdleSelectChange, setInputFormValues,  ];
    
}
