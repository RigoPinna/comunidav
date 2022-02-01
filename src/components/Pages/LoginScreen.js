import React from 'react'
import {Helmet} from "react-helmet";
import { useIsLoged } from '../../hooks/useIsLoged';
import { Login } from '../Login/Login';


export const LoginScreen = ({ history, location }) => {
    useIsLoged( history, location );
    
    return (
        <>
            <Helmet>
                <title>Comunidav | Iniciar sesión</title>
                <meta charset="utf-8"/>
                <meta 
                    name="keywords" 
                    content="Login, Iniciar,iniciar,Sesion,sesion, Sesión,sesión, Comunidav,comunidav,Comunidad, comunidav, asociación, asociacion, voluntario"/>
                
            </Helmet>
            <div className="__wrapper_main_login">
                <Login history = { history } />
            </div>
        </>
    )
}
