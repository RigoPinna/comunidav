import { fetchGetAscFromCountry } from "../services/fetchGetAscFromCountry";
import { types } from "../types";

const initialState = [];

export const getAssociationFromCountry = ( cid ) => {
    return  async ( dispatch ) => {
        const resp =  await fetchGetAscFromCountry( cid );
        dispatch({
            type: types.addAssociationFromCountry,
            payload: [ ...resp ],
        });
    }

}
export const associationSearchReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.addAssociationFromCountry:

            return action.payload;

        default:

            return state;
    }
}