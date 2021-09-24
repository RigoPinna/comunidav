import { fetchAddResponse } from "../services/fetchAddResponse";
import { types } from "../types";
import { addResponseUI, closeAlert, loadingInComponent, openAlert } from "./uiReducer";

const initialState = {};

export const mountInformationGroup = ( group ) => ({
    type: types.addInformationGroup,
    payload: group,
})
export const addResponseToPublication = ( eid,pid, uid, response ) => {
    return async ( dispatch ) => {
        dispatch( loadingInComponent( true ) );
        const resp = await fetchAddResponse( eid ,pid, uid, response );
        if( resp.ok ) {
            if ( !resp.exist ) {
                dispatch( openAlert(
                    "Error al publicar tu respuesta",
                    "La publicación que intentas responder no existe.",
                    () => dispatch( closeAlert () ), 
                ));
            }else {
                dispatch(addResponseUI( true ))
            }

        } else {
            dispatch( openAlert(
                "Error al responder",
                "Ups... algo salió mal, intenta más tarde",
                () => dispatch( closeAlert () ), 
            ));
        }
        dispatch( loadingInComponent( false ) );

    }
}
export const groupVisitReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.addInformationGroup:

            return action.payload;

        default:
            return state;
    }

}