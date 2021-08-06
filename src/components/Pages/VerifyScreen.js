import React from 'react';

import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { Verify } from '../verify/Verify';

export const VerifyScreen = () => {

    const { displayName } = useSelector( state => state.userLogedReducer );
    return (
        <>
        <Helmet>
            <title>Comunidav | Verificación de cuenta</title>
        </Helmet>
            <h1>Verificación de cuenta</h1>
            <div className="__wrapper_verify">
                <div className="__wrapper_verify_header">
                    <h4>Hola, { displayName }</h4>
                </div>
                <div className="__wrapper_verify_body">
                    <p>Estás a un paso de hacer un cambio en tu sociedad.</p>
                   
                    <strong>Ingresa a tu correo electrónico que registraste, copia el código de 
                            verificación que hemos enviado y pégalo en algun recuadro:
                    </strong>
                    <Verify />
                </div>
            </div>
        </>
    )
}
