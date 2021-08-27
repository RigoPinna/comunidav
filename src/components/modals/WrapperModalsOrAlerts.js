import React from 'react'
import { ButtonCloseModal } from './ButtonCloseModal'

export const WrapperModalsOrAlerts = ({ children }) => {
    return (
        <div className="__modal_wrapper">
            <div className ="__modal_normal animate__animated animate__fadeInUp ">
                <ButtonCloseModal />
                { children }
            </div>
        </div>
    )
}
