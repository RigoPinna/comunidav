import { fetchAddPublication } from "../services/fetchAddPublication";
import { fetchAddResponse } from "../services/fetchAddResponse";
import { fetchUnSuscribed } from "../services/fetchUnSuscribed";
import { types } from "../types";
import { addResponseUI, closeAlert, loadingInComponent, openAlert } from "./uiReducer";

const initialState = {};

export const mountInformationGroup = ( group ) => ({
    type: types.addInformationGroup,
    payload: group,
})
export const addPublication = ( eid, desc ) => {
    return async ( dispatch, getState ) => {
        try {
            const { uid, image, name, lastName, displayName, nameAsc } = getState().userLogedReducer;
            const resp = await fetchAddPublication( eid, uid, desc );
            if ( resp.ok && resp.exist && resp?.pid ) {
                dispatch({
                    type: types.addPublication,
                    payload: {
                        publication: {
                            uid,
                            image,
                            name,
                            lastName,
                            nameAsc,
                            displayName,
                            description: desc,
                            response: [],
                            createdat: Date.now(),
                        }
                    }
                })
            } else {
                dispatch(openAlert('Error','Ups hubo un error, intente más tarde', ()=>dispatch(dispatch( closeAlert())) ))
            }
        } catch ( err ) {
            dispatch(openAlert('Error','Ups hubo un error, intente más tarde2', ()=>dispatch(dispatch( closeAlert())) ))
        }
    }
    
}
export const addResponseToPublication = ( eid,pid, uid, response ) => {
    return async ( dispatch ) => {
        // dispatch( loadingInComponent( true ) );
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
        // dispatch( loadingInComponent( false ) );

    }
}
export const groupVisitReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.addInformationGroup:

            return action.payload;
            
        case  types.addPublication:
            const { publications } = state;
            const addedPublication = [...publications, action.payload.publication ]
            return { ...state, publications: addedPublication };
        default:
            return state;
    }

}