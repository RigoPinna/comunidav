import { fetchGetEventUser } from "../services/fetchGetEventUser";
import { types } from "../types";

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
export const createEvent = () => {
    return ( dispatch ) => {
        
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
        default:
            return state
    }

}