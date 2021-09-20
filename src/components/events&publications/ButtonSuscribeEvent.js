import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { openModalSuscribe } from '../../reducers/uiReducer';
import { IconArrowRight } from '../iconos/IconArrowRight';
import { IconSuscribe } from '../iconos/IconSuscribe';
import { LoadingInComponent } from '../loadings/LoadingInComponent';

export const ButtonSuscribeEvent = ( event ) => {
    const dispatch = useDispatch();
    const [ suscribed, setSuscribed ] = useState({ loading:true, suscribed: false})
    const { groupsReducer } = useSelector( state => state )
    const history = useHistory();
    useEffect(() => {
        const haveEvent = groupsReducer.some( e => +e.eid === +event.evtID || +e.eid === +event.eid);
        if( haveEvent ) {
            setSuscribed({ loading:false, suscribed: true });
        } else if ( !!event.participants ) {
            const isSuscribe = event.participants.some( user => +user.uid === +event.uidLoged );
            setSuscribed({ loading:false, suscribed: isSuscribe });
        }
    }, [ groupsReducer ])

    const handleOnClick = () => {
        if ( suscribed.suscribed ) {
            history.push(`/event?query=${event.eid}`);
        } else {
            dispatch( openModalSuscribe( event ) );
        }
    }
    return (
        <button
            disabled = { suscribed.loading }
            onClick={ handleOnClick } 
            className = "__btn __btn_suscribe"
            >
                {
                    suscribed.loading 
                        ? <LoadingInComponent /> 
                        : suscribed.suscribed 
                            ? <>Ir al grupo<IconArrowRight /> </> 
                            : <> <IconSuscribe /><p>Inscribirme</p> </>
                }
        </button>
    )
    
}
