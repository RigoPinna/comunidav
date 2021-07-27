import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

export const HomeScreen = () => {
    return (
        <>
        <Helmet>
            <title>Comunidav | Eventos</title>
            <meta charset="utf-8"/>
            <meta 
                name="keywords" 
                content="Comunidav,comunidav,Comunidad, comunidav, asociación, asociacion, voluntario"/>
            
        </Helmet>
        <div>
            <h1>HOME</h1>
            <Link to="/profile">
                ir a perfil
            </Link>
        </div>
        </>
    )
}
