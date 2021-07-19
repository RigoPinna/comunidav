import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeModalImage } from '../../reducers/uiReducer';

export const ButtonCloseModal = () => {
    const dispatch = useDispatch();
    const buttonRef = useRef( null )

    const handleCloseModal = ( ) => {
        const btnClose = buttonRef.current;
        const contenFather = btnClose.parentNode;
        contenFather.classList.add( 'animate__fadeOutDown' )
        setTimeout(() => {
            dispatch( closeModalImage() );
        }, 200);
    }
    return (
        <button ref = { buttonRef } onClick = { handleCloseModal } className = '__btn __btn_close'>
            <svg 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M6 18L18 6M6 6l12 12" 
                    />
            </svg>
        </button>
    )
}
