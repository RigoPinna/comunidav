import React from 'react';

import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Verify } from '../verify/Verify';
import { IllustrationVerifyCode } from '../iconos/IllustrationVerifyCode';

export const VerifyScreen = ({ history}) => {

    const { uid, displayName, email, isVerify } = useSelector( state => state.userLogedReducer );
    return (
        <>
        <Helmet>
            <title>Comunidav | Verificación de cuenta</title>
        </Helmet>
            <h1>Verificación de cuenta</h1>
            <div className="__wrapper_verify animate__animated animate__fadeIn">
                <div className="__wrapper_verify_header">
                    <h4>Hola, { displayName }</h4>
                </div>
                <div className="__wrapper_verify_body">
                    <IllustrationVerifyCode />
                    <p>Estás a un paso de hacer un cambio en tu sociedad.</p>
                    <strong>Ingresa a tu correo electrónico que registraste, copia el código de 
                            verificación que hemos enviado y pégalo en algun recuadro:
                    </strong>
                    <Verify uid = {uid} email = { email } isVerify = { isVerify } history = { history }/>
                </div>
            </div>
        </>
    )
}
