import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { openModalSuscribe } from '../../reducers/uiReducer';
import { IconArrowRight } from '../iconos/IconArrowRight';
import { IconSuscribe } from '../iconos/IconSuscribe';
import { LoadingInComponent } from '../loadings/LoadingInComponent';

export const ButtonSuscribeEvent = ( {uid, eid, ascName, evtName,participants }) => {
    const dispatch = useDispatch();
    const [ suscribed, setSuscribed ] = useState({ loading:true, suscribed: false})
    const history = useHistory();
    useEffect(() => {
        const isSuscribe = participants.some( user => +user.uid === +uid );
        setSuscribed({ loading:false, suscribed: isSuscribe });
    }, [])
    const handleOnClick = () => {
        if ( suscribed.suscribed ) {
            history.push(`/event?query=${eid}`);
            
        } else {
            dispatch( openModalSuscribe( ascName,evtName, eid ) );
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
                            ? <> <p>Ir al grupo</p><IconArrowRight /> </> 
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
