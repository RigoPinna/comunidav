import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { closeAllModal } from '../../reducers/uiReducer';
import { IconX } from '../iconos/IconX';

export const ButtonCloseModal = () => {
    const dispatch = useDispatch();
    const buttonRef = useRef( null )

    const handleCloseModal = ( ) => {
        const btnClose = buttonRef.current;
        const contenFather = btnClose.parentNode;
        contenFather.classList.add( 'animate__fadeOutDown' )
        setTimeout(() => {
            dispatch( closeAllModal() );
        }, 200);
    }
    return (
        <button ref = { buttonRef } onClick = { handleCloseModal } className = '__btn __btn_close'>
           <IconX />
        </button>
    )
}
