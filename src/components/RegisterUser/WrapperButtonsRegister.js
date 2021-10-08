import React from 'react'
import { useActionButtonsRegister } from '../../hooks/useActionButtonsRegister';

import { IconArrowRight } from '../iconos/IconArrowRight'
import { LoadingInComponent } from '../loadings/LoadingInComponent';

export const WrapperButtonsRegister = ({ actualStep, formData, validForm, setValidForm }) => {
    
    const [ totallyStep,isLoading,handleGoToNextStep, hanldeStartCreateUser ] = useActionButtonsRegister( actualStep, formData, validForm, setValidForm );

    return (
        <>
            <div className = "__form_register_wrapper_buttons_footer">
                { 
                    ( totallyStep === actualStep )
                        ? <button 
                                disabled ={ isLoading }
                                onClick = { hanldeStartCreateUser }
                                className = "__btn __btn_created" >
                                     { 
                                    isLoading
                                        ? <LoadingInComponent />
                                        :'Crear cuenta'
                                }
                            </button> 
                        : <button onClick = { handleGoToNextStep } className = "__btn " disabled ={ isLoading } >
                                { 
                                    isLoading
                                        ? <LoadingInComponent />
                                        :<>
                                            <p>Siguiente</p>
                                            <IconArrowRight />
                                        </>
                                }
                            </button>  
                }
            </div>
        </>
    )
}
