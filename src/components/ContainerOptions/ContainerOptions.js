import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { OPTION_SUBMEN_USER } from '../../helpers/OPTION_SUBMENU_USER';
import { useIsMounted } from '../../hooks/useIsMounted';
import { addAllEvents } from '../../reducers/myEventsReducer';
import { fetchGetEventUser } from '../../services/fetchGetEventUser';
import { Event } from '../events&publications/Event';
import { ItemFavoriteAsc } from '../favoriteAsc/ItemFavoriteAsc';
import { ItemGroup } from '../groupsEvents/ItemGroup';
import { LoadingInComponent } from '../loadings/LoadingInComponent';



export const ContainerOptions = React.memo(({ uid, optionMenu }) => {
    
    const { myEventsReducer,userLogedReducer,groupsReducer, favoritesReducer } = useSelector( state => state )
    const [isLoading, setIsLoading] = useState( true )
    const [ isMounted ] = useIsMounted();
    const dispatch = useDispatch();
    const [ eventOtherUser, setEventOtherUser ] = useState([]);
    const { uid:userLoged, typeUser } = userLogedReducer;
    
    useEffect(() => {
        if ( isMounted ) {
            if ( uid === userLoged ) {
                if ( typeUser === 'ASC') {
                    ( myEventsReducer.length <= 0 ) 
                        ? dispatch( addAllEvents( userLoged ))
                        : setEventOtherUser( myEventsReducer );
                }
                isLoading && setIsLoading( !isLoading );
            } else {
                fetchGetEventUser( uid ).then( events => {
                    setEventOtherUser(  events );
                    isLoading && setIsLoading( !isLoading );
                });
            }
        }
    }, [ isMounted, uid,userLoged, dispatch, myEventsReducer ])
    switch ( optionMenu ) {
        case OPTION_SUBMEN_USER.viewMyEvents:
            return (
                <div className = '__wrapper_feed_publications'>
                    { 
                        isLoading && <LoadingInComponent /> 
                    }
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
        case OPTION_SUBMEN_USER.viewMyGroups:
            return (
                <div className = '__wrapper_feed_groups_events'>
                    {
                        groupsReducer.length > 0 
                            ? groupsReducer.map( ( { eid, nameEvent, infoCreator,participants }, i ) => {
                                return (
                                   <ItemGroup
                                       key = {`gid-${ eid }`}
                                       eid = { eid }
                                       nameCreator = { infoCreator.displayName }
                                       imageCreator = { infoCreator.image }
                                       nameEvent = { nameEvent }
                                       participants = { participants }
                                   />
                                   
                               )
                           })
                           :<p>No te has inscrito a algun evento aun...</p>
                    }
                     
                </div>
            )
        case OPTION_SUBMEN_USER.viewMyFav:
            return (
                <div className = '__wrapper_feed_publications'>
                    { 
                        favoritesReducer.length > 0
                            ? favoritesReducer.map( (( ascFav, i ) => {
                                return (
                                    <ItemFavoriteAsc
                                        key = {`fav-${ Date.now()+ascFav.idFavorite+uid}`}
                                        {...ascFav }
                                    />
                                )
                            }))
                            :<p>Aun no has agregado asociacionesa tus favoritos...</p> 
                    }
                    
                </div>
            );
        default:
            return <p>Ups...Hubo un error inesperado.</p>
    }
    
})
