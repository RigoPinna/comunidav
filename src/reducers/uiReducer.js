
import { types } from "../types";

const initialState = {
    loading:true,
    viewModalImage: false,
    uiRouter:{}
}
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


export const uiReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.loadigApp:
            return {
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
        default:
            return state;
    }
}