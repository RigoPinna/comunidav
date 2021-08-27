import React from 'react'
import { useState } from 'react'
import { ModalCreateEvent } from '../modals/ModalCreateEvent'

export const ButtonCreateEvent = () => {
    const [viewModal, setviewModal] = useState( false )
    const hanldeCreateEvent = ( evt ) => {
        setviewModal( true)

    }
    return (
        <>
        <button 
            onClick = { hanldeCreateEvent }
            className="__btn">
            <svg 
                fill="currentColor" 
                viewBox="0 0 20 20" 
                >
                    <path 
                        d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" 
                    />
            </svg>
           <p>Crear evento</p>
        </button>
        {
            viewModal && <ModalCreateEvent />
        }
        </>
    )
}
