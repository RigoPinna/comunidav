import React from 'react'
import { useSelector } from 'react-redux'
import { ButtonCloseModal } from './ButtonCloseModal';

export const ModalViewImage = () => {
    const { image } = useSelector( state => state.uiReducer );
    return (
        <div className="__modal_wrapper ">
            <div className ="__modal_container __modal_container_image animate__animated animate__fadeInUp ">
                <ButtonCloseModal />    
                {
                    !!image && <img src={ image } alt="Evento" />
                }
            </div>
            
        </div>
    )
}
