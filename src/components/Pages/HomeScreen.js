import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import { fetchGetAllEvents } from '../../services/fetchGetAllEvents';
import { Event } from '../events&publications/Event';
import { WrapperFeed } from '../events&publications/WrapperFeed';
import { LoadingInComponent } from '../loadings/LoadingInComponent';
export const HomeScreen = () => {
    const { uid } = useSelector(state => state.userLogedReducer )
    const [ events, setEvents ] = useState( undefined );
    useEffect(() => {
       ( async () => {
           if ( !!uid ) {
               const events = await fetchGetAllEvents( uid );
               setEvents( events );
           }
       })(); 
    }, [])

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
            <h1>Todos los eventos</h1>
        </div>
        <WrapperFeed>
            { 
            ( events === undefined ) 
                ? <LoadingInComponent textLoading = "Cargando eventos..."/>
                : ( events.length <= 0 ) 
                    ? <p>No hay eventos</p> 
                    : events.map( evt => <Event key = {`all-evt-${evt.evtID}`}{ ...evt } /> )
            }
        </WrapperFeed>
        </>
    )
}
