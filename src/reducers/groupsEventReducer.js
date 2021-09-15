import { fetchGetGroupsEvents } from "../services/fetchGetGroupsEvents";
import { types } from "../types";
// [
//     {
//         eid,
//         nameEvent,
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
export const addGroupsEvent = ( myData, group ) => {
    return ( dispatch ) => {
        //TODO: fetch pendiente(front & back)
    }
}
export const registerGroup = ({ nameEvent, imageURL, description, requirement, ubication }, eid, uid, displayName, imgCreator, participants ) => ({
    type: types.registerToGroup,
    payload: {
        eid,
        nameEvent,
        image:imageURL,
        description,
        ubication,
        requirement,
        creator: {
            uid,
            displayName,
            image:imgCreator
        },
        participants
    }
})
export const resetGroups = () =>({
    type: types.resetGroups,
    payload: initialState,
})
export const deleteGroup = ( eid ) =>({
    type: types.deleteGroups,
    payload: eid
})

export const groupsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case types.addGroupsEvent:
            return [...state, ...action.payload ];

        case types.registerToGroup:
            return [...state, action.payload ];
        case types.resetGroups:
            return action.payload
        case  types.deleteGroups:
            return state.filter( ({ eid }) => +eid !== +action.payload );
        default:
            return state;
    }
}