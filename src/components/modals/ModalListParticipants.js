import React from 'react'
import { ItemUser } from '../Items/ItemUser'
import { WrapperModalsOrAlerts } from './WrapperModalsOrAlerts'

export const ModalListParticipants = () => {
    return (
        <WrapperModalsOrAlerts>
            <h1>Lista de participantes</h1> 
            <ul>
                <li><ItemUser /></li>
                <li><ItemUser /></li>
                <li><ItemUser /></li>
            </ul>  
        </WrapperModalsOrAlerts>
    )
}
