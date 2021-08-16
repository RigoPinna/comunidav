import React, { useRef } from 'react'
import { useValidateCode } from '../../hooks/useValidateCode';
import { Alert } from '../alerts/Alert';
import { AlertInForm } from '../alerts/AlertInForm';
import { LoadingInComponent } from '../loadings/LoadingInComponent'
export const Verify = ({ uid, email, isVerify, history }) => {

    const c1 = useRef( null );
    const c2 = useRef( null );
    const c3 = useRef( null );

    const [codes, handdleInputChange, verifyCode,isLoading, handleFordwardCode, forwardCode ] = useValidateCode( c1, c2, c3 );

    return (
        <>
            <form>
                {
                    isLoading.errorCode
                    &&<AlertInForm 
                        styleAlert = { '__alert_error_inForm' }  
                        title = {'Erro en el código'}
                        descriptionError = {'Por favor, asegurate de colocar el código correctamente.'}
                    />
                }
                <div>
                    <input
                        ref = {c1} 
                        onChange={ handdleInputChange } 
                        className ="__input_code" 
                        type="text" 
                        name="c1" 
                        placeholder ="Code" 
                        value = { codes.c1}/>
                    <input
                        ref = {c2}  
                        onChange={ handdleInputChange } 
                        className ="__input_code" 
                        type="text" 
                        name="c2" 
                        placeholder ="Code" 
                        value = {codes.c2}/>
                    <input 
                        ref = {c3} 
                        onChange={ handdleInputChange } 
                        className ="__input_code" 
                        type="text" 
                        name="c3" 
                        placeholder ="Code" 
                        value = {codes.c3}/>
                </div>
                <button 
                    onClick = { verifyCode } 
                    className="__btn"
                    disabled = { isLoading.loadingVerify }>
                        { isLoading.loadingVerify 
                            ? <LoadingInComponent />
                            :<p>Verificar cuenta</p>
                        }
                </button>
                <div 
                    className = { isLoading.forwardCode
                                        ? '__wrapper_verify_footer __wrapper_verify_footer_sended animate__animated animate__fadeIn'
                                        :'__wrapper_verify_footer'
                                }
                >
                    <p>
                        { isLoading.forwardCode
                                ? 'Código enviado correctamente' 
                                : '¿No has recibido tu código de verifiación?'
                        }
                    </p>
                    {
                         isLoading.forwardCode
                            && <p>Se ha enviado un nuevo código de verifiación a <strong>{ email }</strong></p>         
                    }
                    {
                        ! isLoading.forwardCode
                            && <button
                                    onClick = { handleFordwardCode }
                                    className = "__btn"
                                    disabled = { isLoading.loadingFordwardCode }
                                    >
                                        {
                                            isLoading.loadingFordwardCode
                                            ? <LoadingInComponent />
                                            :  <p>Reenviar código de verificación a { email }</p>   
                                        }
                                </button>
                    }
                </div>
            </form>
            {
                isVerify 
                    &&<Alert 
                        title = {'Verificación exitosa'} 
                        contentText = {'Se ha verificado tu cuenta correctamente.'}
                        addButtonAccepter = { true }
                        actionButtonAccept = {()=> { history.replace(`/user?q=${uid}`)}}
                    />
            }
        </>
    )
}
