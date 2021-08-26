import React, { useEffect } from 'react'
import { useLayoutEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { useIsMounted } from '../../hooks/useIsMounted';
import { fetchGetEventUser } from '../../services/fetchGetEventUser';
import { Event } from './Event';
const statusMountedEvents = {
    loading: undefined,
    empty: [],
}
export const EventsUser = React.memo(({ uid }) => {
    const { userLogedReducer, myEventsReducer } = useSelector( state => state );
    const [ events, setEvents ] = useState( statusMountedEvents.loading )
    const [isMounted ] = useIsMounted();
    useLayoutEffect(() => {
        let controller = new AbortController();
        ( async () => {
            const { uid:uidLoged } = userLogedReducer;
            const events = ( +uid === +uidLoged ) ?  myEventsReducer : await fetchGetEventUser( uid )
            setEvents( events.length > 0 ? events : statusMountedEvents.empty);
            controller = null;
        })();
        return () => {
            return controller?.abort()
        };
    }, [ myEventsReducer, uid ])
    return (
        <>
            {
                events === statusMountedEvents.loading
                    && 'Cargando...'
            }
            {
                 events === statusMountedEvents.empty
                    && 'Esta asociación no tiene eventos'
            }
            {
                events?.length > 0 
                    && events.map( evt => {
                        return <Event key = {`my-evt-${evt.evtID}`} {...evt} />
                    }) 
            }
            
        </>
    )
})
