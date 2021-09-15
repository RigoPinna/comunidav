// state = [
//     {
//         uid,
//         aid,
//         displayName,
//         image,
//         category,
//         description,
//     },

import { fetchGetFavorites } from "../services/fetchGetFavorites";
import { fetchtoggleFavorite } from "../services/fetchtoggleFavorite";
import { types } from "../types";
import { loadingInComponent } from "./uiReducer";

// ]
const initialState = [];

export const addAllFavorites = ( uid ) => {
    return async ( dispatch ) => {
        const myFavorites = await fetchGetFavorites( uid );
        dispatch({
            type: types.addAllFavoriteAsc,
            payload: myFavorites,
        });
    }
}
export const resetFavorites = () => ({
    type: types.resetFavorites,
    payload: initialState

});



export const removeFavorite = ( aid, uid ) => {
    return async ( dispatch ) => {
        try {
            console.log(aid, uid);
            dispatch( loadingInComponent( true ) );
            const resp = await fetchtoggleFavorite( aid, uid );
            if( resp.ok ) {
                dispatch({
                    type: types.removeFavorite,
                    payload: aid,
                })
                dispatch( loadingInComponent( false ) );
            }else {
                dispatch( loadingInComponent( false ) );

            }
            

        }catch( err ) {
            console.log( err )
        }
    }

}
export const addToFavorites = ( dataAsc, uid ) => {
    return async ( dispatch ) => {
        try {
            dispatch( loadingInComponent( true ) );
            const resp = await fetchtoggleFavorite( dataAsc.aid, uid );
            if( resp.ok ) {
                dispatch({
                    type: types.addToFavorite,
                    payload: [ dataAsc ],
                })
                console.log( resp)
                dispatch( loadingInComponent( false ) );
            }else {
                dispatch( loadingInComponent( false ) );

            }
            

        }catch( err ) {
            console.log( err )
        }
    }
}


export const favoritesReducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case types.addAllFavoriteAsc:
            return [...state,...action.payload ];
        case types.addToFavorite: 
            return [...state, ...action.payload ];
        case types.resetFavorites:
            return action.payload;
        case types.removeFavorite: 
            return state.filter( ({ aid }) => +aid !== +action.payload );
        default:
            return state;
    }

}