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
    const history = useHistory();
    useEffect(() => {
        if ( !!event.participants ) {
            const isSuscribe = event.participants.some( user => +user.uid === +event.uidLoged );
            setSuscribed({ loading:false, suscribed: isSuscribe });
        }
    }, [])
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
            {/* { 
                !isTheCreator && <IconSuscribe /> 
            }
            <p>
                { textButton !== '' ? textButton : text }
            </p>
            { 
                (isTheCreator || isSuscribe ) && 
            } */}
        </button>
    )
    
}
