import { fetchCreateEvent } from "../services/fetchCreateEvent";
import { fetchGetEventUser } from "../services/fetchGetEventUser";
import { types } from "../types";
import { registerGroup } from "./groupsEventReducer";
import { loadingInComponent } from "./uiReducer";
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
                        participants:1,
                        listParticipants:participants,
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
export const myEventsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case types.addAllMyEvents:

            return [ ...state, ...action.payload ];

        case types.resetMyEvent:
           return action.payload;
        case  types.createEvent:
           return [...state,...action.payload];
        default:
            return state
    }

}