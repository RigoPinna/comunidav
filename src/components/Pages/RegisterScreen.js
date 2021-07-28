import React, { useReducer } from 'react'
import { RegisterContext } from '../RegisterUser/RegisterContext'
import { initialState, registerReducer } from '../RegisterUser/registerReducer'
import { WrapperMainRegister } from '../RegisterUser/WrapperMainRegister'

export const RegisterScreen = () => {
    const [ stateProgress, dispatch ] = useReducer( registerReducer,  initialState );
    
    return (
        <section className = "__wrapper_register">
            <RegisterContext.Provider value = { { stateProgress, dispatch } }>
                <WrapperMainRegister />
            </RegisterContext.Provider>
        </section>
    )
}
