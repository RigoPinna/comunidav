import { fetchCreateEvent } from "../services/fetchCreateEvent";
import { fetchDeleteEvent } from "../services/fetchDeleteEvent";
import { fetchGetEventUser } from "../services/fetchGetEventUser";
import { types } from "../types";
import { deleteGroup, registerGroup } from "./groupsEventReducer";
import { closeAlert, loadingInComponent, openAlert } from "./uiReducer";
//OBJECT EVENT EXAMPLE.
// uid:number
// aid:number
// evtID:number
// nameAsc:string
// evtName:string
// date:string
// hours:string
// location:string
// imageEvt:url
// requires:string
// description:string
// created:"2021-09-06 22:18:33"
// userImg:url-img-creator
// category:string
// participants:number
// listParticipants: array []
const initialState = [];

export const addAllEvents = ( uid ) => {
    return ( dispatch ) => {
        fetchGetEventUser( uid ).then( myEvents => {
            const action = {
                type: types.addAllMyEvents,
                payload:myEvents
            }
            dispatch( action );
        })
    }
}
export const createEvent = ( { uid, aid, displayName, image,category },dataEvent ) => {
    return async ( dispatch ) => {
        const TOKEN = sessionStorage.getItem( 'token' );
        try {
            dispatch(loadingInComponent( true ))
            const resp = await fetchCreateEvent(uid,TOKEN, dataEvent );
            if ( resp.ok ) {
                const participants = [{ uid, displayName, image }]
                dispatch({
                    type: types.createEvent,
                    payload: [{
                        uid,
                        aid,
                        evtID:resp.eid,
                        nameAsc:displayName,
                        evtName:dataEvent.nameEvent,
                        date:dataEvent.dateInit,
                        hours:dataEvent.hourInit,
                        location:dataEvent.ubication,
                        imageEvt:dataEvent.imageURL,
                        requires:dataEvent.requirement,
                        description:dataEvent.description,
                        created:new Date(),
                        userImg:image,
                        category,
                        participants:participants,
                        // listParticipants:participants,
                    }]
                })
                dispatch( registerGroup( dataEvent, resp.eid, uid, displayName, image, participants ) );
                dispatch( loadingInComponent( false ) ) 
            }
        } catch( err ) {
            console.log( err )
        }
        
    }
}
export const resetMyEvent = ( ) => ({
    type: types.resetMyEvent,
    payload: initialState
})

export const deleteEvent = ( eid, uid ) => {
    return async( dispatch ) => {
        try {
            const actionDeleteEvt = () => {
                const token = sessionStorage.getItem( 'token' );
                fetchDeleteEvent( eid, uid, token ).then( resp =>{
                    if ( resp.ok ) {
                        dispatch( 
                            openAlert(
                                'Evento eliminado',
                                'Se ha eliminado correctamente el evento',
                                () => { 
                                    dispatch( closeAlert())
                                    dispatch( deleteGroup( eid ))
                                    dispatch({
                                        type: types.deleteMyEvent,
                                        payload: eid,
                                    })

                                }
                            )            
                        );
                    } else {
                        dispatch(openAlert('Error','Ups... hubo un error, intenta más tarde',() => dispatch( closeAlert())));
                    }
            
                })
            }
            const title = 'Atención';
            const content = '¿Estás seguro de eliminar este evento?, se eliminará todo lo relacionado con este evento(grupo y publicaciones)';

            dispatch(openAlert( title, content, actionDeleteEvt,true, ()=> dispatch(closeAlert()),'Eliminar evento' ))
            

        } catch( err ){

        }

    }
}
export const myEventsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case types.addAllMyEvents:

            return [ ...state, ...action.payload ];

        case types.resetMyEvent:
           return action.payload;

        case  types.createEvent:
           return [...state,...action.payload];

        case  types.deleteMyEvent:
            return state.filter( ({ evtID }) => +evtID !== +action.payload );

        default:
            return state
    }

}