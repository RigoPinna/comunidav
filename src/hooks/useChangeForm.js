import { useState } from "react"


export const useChangeForm = ( initialState = {} ) => {
    const [ inputFormValues, setInputFormValues] = useState( initialState );

    const handdleInputChange = ( evt, sendForm ) => {
        evt.preventDefault();
        const inputName = evt.target.name;
        const inputValue = ( inputName === 'rfc' ) ? evt.target.value.toUpperCase() : evt.target.value;
        setInputFormValues({
            ...inputFormValues, 
            ...{ [inputName]: inputValue} 
        });
       
    }

    return [ inputFormValues, handdleInputChange,setInputFormValues ];
    
}
