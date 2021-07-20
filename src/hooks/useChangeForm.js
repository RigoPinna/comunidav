import { useState } from "react"


export const useChangeForm = ( initialState = {} ) => {
    const [ inputFormValues, setInputFormValues ] = useState( initialState );

    const handdleInputChange = ( evt ) => {
        evt.preventDefault();
        const inputName = evt.target.name;
        const inputValue = evt.target.value;
        setInputFormValues({
            ...inputFormValues, 
            ...{ [inputName]: inputValue} 
        });
        
    }

    return [ inputFormValues, handdleInputChange ];
    
}
