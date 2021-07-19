import React from 'react'
import { useSelector } from 'react-redux'
import { ButtonCloseModal } from './ButtonCloseModal';

export const ModalViewImage = () => {
    const { viewModalImage, image } = useSelector( state => state.uiReducer );
    console.log( viewModalImage)
    return (
        <div className="__modal_wrapper ">
            <div className ="__modal_container __modal_container_image animate__animated animate__fadeInUp ">
                <ButtonCloseModal />    
                <img src={ image } />
            </div>
            
        </div>
    )
}
