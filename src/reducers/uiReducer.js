import { types } from "../types";


export const uiReducer = ( state = { loading:true }, action ) => {

    switch ( action.type ) {
        case types.loadigApp:
            return {
                    loading: action.payload 
                };
    
        default:
            return state;
    }
}