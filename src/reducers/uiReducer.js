
import { types } from "../types";

const initialState = {
    loading:true,
    loadingInComponent:false,
    viewModalImage: false,
    viewModalSuscribe: false,
    viewModalCreateEvent: false,
    viewModalListParticipants: false,
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
export const openModalSuscribe = ( displayName = '',evtName, eid ) => ({
    type:types.openModalImage,
    payload: {
        viewModalSuscribe: true,
        displayName,
        eid,
        evtName,
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
        default:
            return state;
    }
}