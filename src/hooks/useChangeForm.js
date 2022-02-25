import { useState } from "react"


export const useChangeForm = ( initialState = {} ) => {
    const [ inputFormValues, setInputFormValues] = useState( initialState );

    const handdleInputChange = ( evt ) => {
        evt.preventDefault();
        const inputName = evt.target.name;
        console.log( inputName )
        const inputValue = ( inputName === 'rfc' ) ? evt.target.value.toUpperCase() : evt.target.value;
        if(inputName==="terms") {
            console.log( !inputFormValues.terms, inputFormValues.terms )
            setInputFormValues({
                ...inputFormValues, 
                ...{ [inputName]: !inputFormValues.terms } 
            });
        } else {
            setInputFormValues({
                ...inputFormValues, 
                ...{ [inputName]: inputValue} 
            });
        }
       
    }
    const hanldeResetValues = () => {
        const keys = Object.keys( inputFormValues )
        let newState = {};
        keys.forEach( key => {
            newState = {...newState, [ key ]:"", }
        })
        setInputFormValues( newState )
    }

    return [ inputFormValues, handdleInputChange,setInputFormValues, hanldeResetValues ];
    
}
