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
export const resetMyEvent = ( ) => ({
    type: types.resetMyEvent,
    payload: []
})
export const myEventsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case types.addAllMyEvents:
            return [ ...state, ...action.payload ];

        case types.getMyEvents:
            return state;
        case types.resetMyEvents:
           return action.payload;
        default:
            return state
    }

}