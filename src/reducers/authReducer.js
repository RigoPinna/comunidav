import { fetchGetInfoUserLoged } from "../services/fetchGetInfoUserLoged";
import { types } from "../types";



export const getDataUserLoged = ( uid ) => {
    return ( dispatch ) => {
         fetchGetInfoUserLoged( uid ).then( dataUser => {
            const action = {
                type: types.userLoged,
                payload: dataUser,
            }
            dispatch( action );
        });
    }
}

export const userLogedReducer = ( state = {}, action ) => {
    
    switch ( action.type ) {
        case types.userLoged:
           return action.payload;
    
        default:
            return state;
    }

}