import { types } from "../types";

const initialState = {};

export const mountInformationGroup = ( group ) => ({
    type: types.addInformationGroup,
    payload: group,
})
export const groupVisitReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.addInformationGroup:

            return action.payload;

        default:
            return state;
    }

}