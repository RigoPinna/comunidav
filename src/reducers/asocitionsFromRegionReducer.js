import { fetchGetAssociationsFromRegion } from "../services/fetchGetAssociationsFromRegion";
import { types } from "../types";


export const getAssociationsHaveRegion = ( uid, idMun ) => {

    return ( dispatch ) => {
        fetchGetAssociationsFromRegion( uid, idMun ).then( associations => {
            dispatch({
                type: types.associationFromRegio,
                payload: associations,
            });
        })

        
    }
}
export const restAssociationFromRegio = () => ({
    type: types.restAssociationFromRegio,
    payload:[],
})
export const asociationsRegionReducer = ( state = [], action ) => {
    switch ( action.type ) {
        case types.associationFromRegio:
            
            return action.payload;
        case types.restAssociationFromRegio:
            
            return action.payload;
    
        default:
            return state;
    }
}