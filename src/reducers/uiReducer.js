
import { types } from "../types";

const initialState = {
    loading:true,
    loadingInComponent:false,
    viewModalImage: false,
    viewModalSuscribe: false,
    viewModalCreateEvent: false,
    viewModalListParticipants: false,
    viewAlert: false,
    viewConffetti: false
}
export const closeAllModal = () => ({
    type:types.closeAllModals,
    payload: {
        viewModalImage: false,
        viewModalSuscribe: false,
        viewModalCreateEvent: false,
        viewModalListParticipants: false,
    }
})


export const openModalImage = ( image, title ) => ({
    type:types.openModalImage,
    payload: {
        viewModalImage: true,
        image,
        title,
    }
});
export const closeModalImage = () => ({
        type:types.openModalImage,
        payload: {
            viewModalImage: false,
        }
});
export const openModalCreateEvent = () => ({
    type:types.openModalCreateEvent,
    payload: {
        viewModalCreateEvent: true,
    }
});
export const openModalListParticipants = (list, { uid }) => ({
    type:types.openModalListParticipants,
    payload: {
        viewModalListParticipants: true,
        creator: uid,
        participants: list
    }
});
export const openModalSuscribe = ( event ) => ({
    type:types.openModalImage,
    payload: {
        viewModalSuscribe: true,
        displayName: event.ascName,
        eid:event.eid,
        evtName:event.evtName,
        group: {
            eid: event.evtID,
            gid: event.evtID,
            idCreator: event.aid,
            nameEvent: event.nameAsc,
            description: event.description,
            requirement: event.requires,
            date:event.date,
            hours:event.hours,
            ubication:event.location, 
            image:event.imageEvt,
            creator:{
                uid: event.uid,
                displayName: event.nameAsc,
                category: event.category,
                image: event.userImg,
            },
            participants: event.participants
        }
    }
});
export const closeModalSuscribe = () => ({
        type:types.openModalImage,
        payload: {
            viewModalSuscribe: false,
        }
});
export const uiLogout = () => ({
    type:types.uiLogout,
    payload: initialState
});
export const loadingInComponent = ( loading ) => ({
    type:types.loadingInComponent,
    payload: {
        loadingInComponent: loading
    }
})
export const addConffetti = ( status ) =>({
    type:types.toggleConffetti,
    payload: {
        viewConffetti: status,
    }
})
export const nextStepsuscribe = ( ) =>({
    type:types.nextStepSuscribe,
    payload: {
        nextStepSuscribe: true,
    }
})
export const openAlert = ( title, contentText, actionButtonAccept = () => {},  addButtonCanceled=false, actionButtonCanceled=()=>{}, textButton="Aceptar" ) => ({
    type:types.openAlert,
    payload: {
        viewAlert: true,
        title, 
        contentText, 
        actionButtonAccept,
        addButtonCanceled,
        actionButtonCanceled,
        textButton,
    }
});
export const closeAlert = () => ({
    type:types.closeAlert,
    payload: {
        viewAlert: false,
    }
});
export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.loadigApp:
            return {
                    ...state,
                    loading: action.payload 
                };
        case types.openModalImage:
            return {
                ...state,
                ...action.payload
            }
        case types.closeModalImage:
            return {
                ...state,
                ...action.payload
            }
        case types.openModalSuscribe:
            return {
                ...state,
                ...action.payload
            }
        case types.closeModalSuscribe:
            return {
                ...state,
                ...action.payload
            }
        case types.closeAllModals:
            return {
                ...state,
                ...action.payload
            }
        case types.uiLogout:
            return action.payload;
        case types.loadingInComponent:
            return {
                ...state,
                ...action.payload
            }
        case types.openModalListParticipants:
            return {
                ...state,
                ...action.payload
            }
        case types.openAlert:
            return {
                ...state,
                ...action.payload
            }
        case types.closeAlert:
            return {
                ...state,
                ...action.payload
            }
        case types.toggleConffetti :
            return {
                ...state,
                ...action.payload
            }
        case types.nextStepSuscribe:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}