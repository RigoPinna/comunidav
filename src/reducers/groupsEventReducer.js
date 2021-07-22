import { fetchGetGroupsEvents } from "../services/fetchGetGroupsEvents";
import { types } from "../types";
// [
//     {
//         eventID,
//         eventName,
//         creator: {
//             uid,
//             displayName,
//             image,
//         },
//         partisipants :[{}]
//     }
// ]

const initialState = [];

export const addAllGroups = ( uid ) => {

    return  async ( dispatch ) => {

        const groupData = await fetchGetGroupsEvents( uid );
        dispatch({
            type : types.addGroupsEvent,
            payload: groupData,
        });
    }

}
export const resetGroups = () =>({
    type: types.resetGroups,
    payload: initialState,
})


export const groupsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case types.addGroupsEvent:
            return [...state, ...action.payload ];
        case types.resetGroups:
            return action.payload
    
        default:
            return state;
    }
}