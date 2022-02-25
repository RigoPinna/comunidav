import React, { useReducer } from 'react'
import { Helmet } from 'react-helmet'
import { ComunidavLogo } from '../iconos/ComunidavLogo'
import { RegisterContext } from '../RegisterUser/RegisterContext'
import { initialState, registerReducer } from '../RegisterUser/registerReducer'
import { WrapperMainRegister } from '../RegisterUser/WrapperMainRegister'

export const RegisterScreen = ({ history }) => {
    const [ stateProgress, dispatch ] = useReducer( registerReducer,  initialState );
    
    return (
        <>
         <Helmet>
                <title>Comunidav | Registro de usuarios</title>
                <meta charset="utf-8"/>
                <meta 
                    name="keywords" 
                    content="registrarme, registro,Comunidav,comunidav,Comunidad, comunidav, asociación, asociacion, voluntario"/>
                
        </Helmet>
        <section className = "__wrapper_register">
            
            <RegisterContext.Provider value = { { stateProgress, dispatch } }>
                <WrapperMainRegister history = { history }/>
            </RegisterContext.Provider>
        </section>
        </>
    )
}
