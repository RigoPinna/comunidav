import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { WrapperFeed } from '../events&publications/WrapperFeed';
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
        <div className="__title_pages">
            <h1>Todos los eventos en $region</h1>
        </div>
        <WrapperFeed>

        </WrapperFeed>
        </>
    )
}
