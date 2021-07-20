import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useIsMounted } from '../../hooks/useIsMounted';
import { addMyEvents } from '../../reducers/myEventsReducer';
import { fetchGetEventUser } from '../../services/fetchGetEventUser';
import { Event } from '../events&publications/Event';
const OPTION_MENU = {
    viewMyEvents: 1,
    viewMyGroups: 2,
    viewMyFav: 3,
}
export const ContainerOptions = React.memo(({ uid, optionMenu }) => {
    

    const { myEventsReducer,userLogedReducer } = useSelector( state => state )
    const [ isMounted ] = useIsMounted();
    const dispatch = useDispatch();
    const [ eventOtherUser, setEventOtherUser ] = useState([]);
    const { uid:userLoged } = userLogedReducer;
    
    useEffect(() => {
        if ( isMounted ) {
            if ( uid === userLoged ) {
                if ( myEventsReducer.length <= 0 ) {
                    dispatch( addMyEvents( userLoged ))
                } else {
                    setEventOtherUser( myEventsReducer );
                }
               
            } else {
                console.log( uid, userLoged )
                fetchGetEventUser( uid ).then( events => {
                    setEventOtherUser(  events );
                });
            }

        }
    }, [ isMounted, uid,userLoged, dispatch, myEventsReducer ])

    switch ( optionMenu ) {
        case OPTION_MENU.viewMyEvents:
            return (
                <div className = '__wrapper_feed_publications'>
                     {
                        eventOtherUser.length >= 0 
                            ?  eventOtherUser.map( evt => {
                                return  <Event key = {`my-evt-${evt.evtID}`} {...evt}/>
                            })
                            : myEventsReducer.map( evt => {
                                return  <Event key = {`my-evt-${evt.evtID}`} {...evt}/>
                            })
                           
                    }  
                </div>
            )
        default:
        return <p>hola?</p>
    }
    
})
