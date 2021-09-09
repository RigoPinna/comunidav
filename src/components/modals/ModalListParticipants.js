import React from 'react';

import { useSelector } from 'react-redux';
import { ItemUser } from '../Items/ItemUser';
import { WrapperModalsOrAlerts } from './WrapperModalsOrAlerts'

export const ModalListParticipants = () => {
    const { creator,  participants=[] } = useSelector( state => state.uiReducer )
    return (
        <WrapperModalsOrAlerts>
            <h1>Lista de participantes</h1> 
            <ul>
                {
                     participants.map( user => {
                           return <li key={`prt-${user.uid}`} >
                                <ItemUser 
                                    typeUser ={ !!user.nameAsc ? 'ASC' : 'VOL' }
                                    displayName = { !!user.nameAsc ? user.nameAsc : `${ user.name } ${ user.lastName }` }
                                    image = { user.image }
                                    textSecondary = { creator === user.uid ? 'Creador' :'Participante' } 
                                />
                            </li> }
                    )

                }
            
            </ul>
              
        </WrapperModalsOrAlerts>
    )
}
