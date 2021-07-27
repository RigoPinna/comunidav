import React, { useContext } from 'react'
import { RegisterContext } from '../RegisterUser/RegisterContext'

import { StartRegister } from '../RegisterUser/StartRegister'

export const RegisterScreen = () => {
    const {stateProgress } = useContext( RegisterContext );
    
   
    return (
        <section className = "__wrapper_register">
                <div className = "__wrapper_register_content animate__animated animate__fadeIn">
                    {
                        stateProgress.startRegister && <StartRegister />
                    }
                    {
                        stateProgress.personData && <p>Aqui van los inputs de registro de datos</p>
                    }
                </div>
        </section>
    )
}
