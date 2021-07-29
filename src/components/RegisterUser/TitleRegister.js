import React, { useContext } from 'react'
import { RegisterContext } from './RegisterContext';

export const TitleRegister = () => {
    const { stateProgress } = useContext( RegisterContext );
    return (
        <div className = "__form_register_title">
            <span><p>{`${ stateProgress.actualStep } de ${ stateProgress.totallyStep }`}</p></span>
            <h2>{ stateProgress.titles[ stateProgress.actualStep - 1] }</h2>
        </div>
    )
}
