import React, { useRef, useState } from 'react'
import { useChangeForm } from '../../hooks/useChangeForm';
import { useValidateCode } from '../../hooks/useValidateCode';
import { Alert } from '../alerts/Alert';
import { ComunidavLogo } from '../iconos/ComunidavLogo';
import { IconMail } from '../iconos/IconMail';
import { IconSendMessage } from '../iconos/IconSendMessage';
import { Input } from '../Inputs/Input';
import { ResetPassword } from '../resetPassword/ResetPassword';
import { SendToken } from '../resetPassword/SendToken';
import { VerifyToken } from '../resetPassword/VerifyToken';

export const ResetPasswordScreen = () => {
    const [ user, setUser ] = useState({ email:'riguxc@gmail.com', verify:true, token:"739-310-689" })
    const [ viewAlert, setViewAlert ] = useState({ viewAlert: false })
    const [ step, setStep ] = useState({ sendEmail: false, verifyToken:false, resetPass: true })
   
    return (
        <div className="__wrapper_forget_pass_content">
            <ComunidavLogo />
            <form>
                <h1>Recuperar contraseña</h1>
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
