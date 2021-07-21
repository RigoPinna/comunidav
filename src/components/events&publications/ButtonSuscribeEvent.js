import React from 'react'
import { useDispatch } from 'react-redux';
import { openModalSuscribe } from '../../reducers/uiReducer';
import { IconArrowRight } from '../iconos/IconArrowRight';
import { IconSuscribe } from '../iconos/IconSuscribe';

export const ButtonSuscribeEvent = ( { text = "Inscribirme", isTheCreator, listParticipants, uid, eid, ascName, evtName }) => {
    const dispatch = useDispatch();
    let textButton = '';
    let isSuscribe = false;
    if ( isTheCreator ) {
        isSuscribe = true;
        textButton = 'Ver grupo';
    } else {
        isSuscribe = listParticipants.some( user => user.uid === uid );
        text = isSuscribe ? 'Visitar grupo' : text;
    }
    const handleOnClick = () => {
        if ( isSuscribe ) {
            console.log('Mandar a página de evento')
        } else {
            dispatch( openModalSuscribe( ascName,evtName, eid ) );
        }
    }
    return (
        <button
            onClick={ handleOnClick } 
            className = "__btn __btn_suscribe"
            >
            { 
                !isTheCreator && <IconSuscribe /> 
            }
            <p>
                { textButton != '' ? textButton : text }
            </p>
            { 
                (isTheCreator || isSuscribe ) && <IconArrowRight /> 
            }
            
        </button>
    )
    
}
