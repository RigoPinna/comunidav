import React, { useEffect } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router'
import { EventBody } from '../events&publications/Page/EventBody'
import { EventHeader } from '../events&publications/Page/EventHeader'
import { useDispatch, useSelector } from 'react-redux'
import { isRegistered } from '../../reducers/groupsEventReducer'
import { Group } from '../events&publications/Page/Group'


export const EventScreen = ({ history }) => {
    const { userLogedReducer, uiReducer, groupVisitReducer } = useSelector(state => state)
    const { uid } = userLogedReducer
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
        if( !!uid ) {
            const { query:eid } = queryString.parse( location.search );
            dispatch( isRegistered( eid, uid ));
        }
    }, [])
    if( !uiReducer.isParticipantGroup ) {
        return <p>No eres participante</p>
    }
    return (
        <>
            {
                groupVisitReducer?.eid
                    ? <Group { ...groupVisitReducer } />
                    : <p>Cargando...</p>
            }
        </>
    )
}
