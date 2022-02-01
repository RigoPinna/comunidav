import React from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { closeAllModal } from '../../reducers/uiReducer';
import { ItemUser } from '../Items/ItemUser';
import { WrapperModalsOrAlerts } from './WrapperModalsOrAlerts'

export const ModalListParticipants = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const { uiReducer, userLogedReducer } = useSelector( state => state );
    const { uid } = userLogedReducer;
    const { creator,  participants} = uiReducer;
    const handleGoToProfile = ({ typeUser, uid:pid }) => {
        if (typeUser === "ASC" ) {
            ( +pid !== +uid ) 
                ? history.push(`/association/${pid}`) 
                : history.push(`/profile`);
            dispatch(closeAllModal());
        }
    }
    return (
        <WrapperModalsOrAlerts>
            <h1>Lista de participantes</h1> 
            <ul>
                {
                     participants.map( user => {
                           return <li key={`prt-${user.uid}`} onClick={()=> handleGoToProfile( user )} >
                                <ItemUser 
                                    typeUser ={ user.typeUser }
                                    displayName = { user.displayName }
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
