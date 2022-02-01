import React, { useState } from 'react'
import { Alert } from '../alerts/Alert'
import { ComunidavLogo } from '../iconos/ComunidavLogo'
import { ResetPassword } from '../resetPassword/ResetPassword'
import { SendToken } from '../resetPassword/SendToken'
import { VerifyToken } from '../resetPassword/VerifyToken'

export const ResetPasswordScreen = () => {
    const [ user, setUser ] = useState({ email:'', verify:true, token:"" })
    const [ viewAlert, setViewAlert ] = useState({ viewAlert: false })
    const [ step, setStep ] = useState({ sendEmail: true, verifyToken:false, resetPass: false })
   
    return (
        <div className="__wrapper_forget_pass_content">
            <ComunidavLogo />
            <form>
                <h1>
                    { step.sendEmail && "Recuperar contraseña" }
                    { step.verifyToken && "Verificar usuario" }
                    { step.resetPass && "Actualizar contraseña"}
                </h1>
                {
                    ( step.sendEmail ) 
                        && <SendToken  
                                setStep = {  setStep } 
                                setViewAlert = { setViewAlert } 
                                setUser= { setUser } />
                }
                {
                    (step.verifyToken) 
                        && <VerifyToken  
                                setStep = { setStep } 
                                setViewAlert = { setViewAlert }
                                user = { user }
                                setUser = { setUser }
                            />
                }
                {
                    (step.resetPass )
                        && <ResetPassword  
                            setViewAlert = { setViewAlert }
                            user= { user } />
                }
            </form>
            { viewAlert.viewAlert 
                    && <Alert 
                            title={viewAlert.title} 
                            contentText = { viewAlert.contentText }
                            textButton = { viewAlert.textButton || 'Aceptar'} 
                            actionButtonAccept = { viewAlert.actionButtonAccept }
                            addButtonCanceled = { viewAlert.addButtonCanceled }
                            actionButtonCanceled = { viewAlert.actionButtonCanceled }
                        />
            }
        </div>
    )
}
