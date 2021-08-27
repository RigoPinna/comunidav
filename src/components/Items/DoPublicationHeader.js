import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { openModalCreateEvent } from '../../reducers/uiReducer'
import { ModalCreateEvent } from '../modals/ModalCreateEvent'
import { ButtonCreateEvent } from './ButtonCreateEvent'
import { ItemUser } from './ItemUser'

export const DoPublicationHeader = React.memo(( {displayName, textSecondary, image,title='Nunca es tarde para ayudar', ComponentCreatePublication }) => {
    const { viewModalCreateEvent } = useSelector( state => state.uiReducer )
    const dispatch = useDispatch( );
    const hanldeCreateEvent = ( evt ) => dispatch( openModalCreateEvent() )
    return (
        <>
        <div className = "__wrapper_doPublication  animate__animated animate__fadeIn">
            <ItemUser displayName = {displayName} textSecondary = {textSecondary} image = {image}/>
            <p>{ title }</p>
            { 
                ComponentCreatePublication 
                    ? <ComponentCreatePublication />
                    :<ButtonCreateEvent hanldeCreateEvent={ hanldeCreateEvent } />
            }
        </div>
            { viewModalCreateEvent  && <ModalCreateEvent />}
        </>
    )
})
