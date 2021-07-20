import { fetchGetEventUser } from "../services/fetchGetEventUser";
import { types } from "../types";

const initialState = [];

export const addMyEvents = ( uid ) => {
    return ( dispatch ) => {
        fetchGetEventUser( uid ).then( myEvents => {
            const action = {
                type: types.addMyEvent,
                payload:myEvents
            }
            dispatch( action );
        })

    }
}

export const myEventsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case types.addMyEvent:

            return [ ...state, ...action.payload ]
        case types.getMyEvents:

        return state
    
        default:
            return state
    }

}