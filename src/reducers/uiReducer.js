
import { types } from "../types";

const initialState = {
    loading:true,
    viewModalImage: false,
    viewModalSuscribe: false,
}
export const closeAllModal = () => ({
    type:types.openModalImage,
    payload: {
        viewModalImage: false,
        viewModalSuscribe: false,
    }
})


export const openModalImage = ( image ) => ({
    type:types.openModalImage,
    payload: {
        viewModalImage: true,
        image,
    }
});
export const closeModalImage = () => ({
        type:types.openModalImage,
        payload: {
            viewModalImage: false,
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
        default:
            return state;
    }
}