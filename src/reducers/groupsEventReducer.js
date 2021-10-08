import { fetchGetGroupsEvents } from "../services/fetchGetGroupsEvents";
import { fetchIsParticipant } from "../services/fetchIsParticipant";
import { fetchRegisterToGroup } from "../services/fetchRegisterToGroup";
import { fetchUnSuscribed } from "../services/fetchUnSuscribed";
import { types } from "../types";
import { mountInformationGroup } from "./groupVisit";
import { addConffetti, closeAlert, isParticipantGroup, loadingInComponent, nextStepsuscribe, openAlert } from "./uiReducer";
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
export const registerToGroup = ( myData, group) => {
    return async ( dispatch ) => {
        dispatch( loadingInComponent( true ) )
        const resp = await fetchRegisterToGroup( myData, group );
        if( resp.ok === true ) {
            dispatch( addConffetti(true) );
            let { participants } = group;
            participants = [ 
                ...participants, 
                { 
                    ui:myData.uid, 
                    name:myData.name,
                    lastName:myData.lastName, 
                    image:myData.image,
                    nameAsc: ( myData.typeUser === "ASC" ) ? myData.displayName : "",
                    displayName: myData.displayName
                }
            ]
            dispatch({
                type: types.registerToGroup,
                payload:{ ...group, participants },
            });
            dispatch( nextStepsuscribe() );
        } else {
            dispatch( openAlert(
                'Error',
                'Algo salió mal, intenta más tarde',
                () => closeAlert()
            ));
        }
        dispatch( loadingInComponent( false ) )

    }
}
export const unSuscribedGroup = ( eid ) => {
    return async ( dispatch, getState ) => {
        const { uid } = getState().userLogedReducer;
        dispatch(openAlert(
            'Atención',
            "¿Estás seguro de abandonar este grupo?",
            async () => {
                try {
                    const resp = await fetchUnSuscribed( eid, uid );
                    ( resp.ok ) 
                        ? dispatch({type: types.deleteGroups, payload: eid })
                        : dispatch(openAlert('Error','Ups hubo un error, intente más tarde',()=> {dispatch(closeAlert())} ))
                    dispatch( closeAlert() );

                } catch (e) {
                    dispatch(openAlert('Error','Ups hubo un error, intente más tarde',()=> {dispatch(closeAlert())} ))
                }
            },
            true,
            ()=> closeAlert(),
            'Si, abandonar'
            ));
    }
}
export const createMyGroup = ({ nameEvent, imageURL, description, requirement, ubication }, eid, uid, displayName, imgCreator, participants ) => ({
    type: types.createMyGroup,
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
export const isRegistered = ( eid, uid ) => {
    return async ( dispatch ) => {
        dispatch(loadingInComponent( true ))
        const group = await fetchIsParticipant( eid, uid );
        console.log( group )
        dispatch(isParticipantGroup( group.suscribed ));
        dispatch(mountInformationGroup( group ));
        dispatch(loadingInComponent( false ))

    }

}
export const groupsReducer = ( state = initialState, action ) => {
    switch ( action.type ) {

        case types.addGroupsEvent:
            return [...state, ...action.payload ];

        case types.createMyGroup:
            return [...state, action.payload ];
        case types.registerToGroup:
            return [...state, action.payload ];
        case types.resetGroups:
            return action.payload
        case types.deleteGroups:
            return state.filter( ({ eid }) => +eid !== +action.payload );
        default:
            return state;
    }
}