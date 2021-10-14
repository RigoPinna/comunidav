import React, { useRef, useState } from 'react'
import { useValidateCode } from '../../hooks/useValidateCode';
import { InputsGroupCode } from '../verify/InputsGroupCode';
import { fetchResetPassword } from '../../services/fetchResetPassword'
import { closeAlert, openAlert } from '../../reducers/uiReducer';
import { LoadingInComponent } from '../loadings/LoadingInComponent';
export const VerifyToken = ({ setStep, setViewAlert, user, setUser }) => {
    const [loading, setLoading] = useState( false )
    const c1 = useRef( null )
    const c2 = useRef( null )
    const c3 = useRef( null )
    
    const [codes, handdleCodeChange, ] = useValidateCode( c1, c2, c3 );
    const hanldeVerifyCode = e => {
        e.preventDefault()
        setLoading( true )
        const data = {
            email: user.email,
            code: `${codes.c1}-${codes.c2}-${codes.c3}`
        }
        fetchResetPassword({step:"codeSend", data }).then( resp => {
           
            if( resp.ok ) {
                if ( resp.email ) {
                    if( resp.verify ) {
                        setUser({ email:user.email, verify:true, token: data.code })
                        setStep({ sendEmail: false, verifyToken:false, resetPass: true })
                    } else {
                        const { payload } = openAlert( 
                                'Error',
                                "Verifica el código de verificación que haz ingresado", 
                                ()=> setViewAlert( closeAlert() ))
                        setViewAlert( payload )
                        setLoading( false )
                    }
    
                } else {
                    const { payload } = openAlert( 
                        "Atención","Algo anda mal con el correo que proporcionó, por favor verifique si es correcto", 
                        ()=> setViewAlert( closeAlert() ) )
                    setViewAlert( payload )
                    setLoading( false )
                }

            } else {
                const { payload } = openAlert( 'Error',"Ups... algo salió mal, intente más tarde", ()=> setViewAlert( closeAlert() ) )
                setViewAlert( payload )
                setLoading( false )
            }
        })
    }
    return (
        <>
            <label>Ingresa el código de verificación que hemos enviado a tu correo</label>
            <InputsGroupCode 
                c1 = { c1 } 
                c2 = { c2 } 
                c3 = { c3 } 
                handdleInputChange = { handdleCodeChange } 
                codes={ codes }/>
            <button disabled = { loading } className="__btn" onClick= { hanldeVerifyCode }>
                {
                    loading 
                        ? <LoadingInComponent />
                        : "Verificar"
                }
            </button>
        </>
    )
}
