import React, { useEffect } from 'react'
import queryString from 'query-string'
import { useLocation } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { isRegistered } from '../../reducers/groupsEventReducer'
import { Group } from '../events&publications/Page/Group'
import { LoadingInComponent } from '../loadings/LoadingInComponent'
import { NotParticipant } from '../events&publications/Page/NotParticipant'


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
    if( uiReducer.loadingInComponent ) {
        return <LoadingInComponent textLoading={'Cargando grupo...'}/>
    } else if ( !uiReducer.isParticipantGroup ) {
        return <NotParticipant />
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
