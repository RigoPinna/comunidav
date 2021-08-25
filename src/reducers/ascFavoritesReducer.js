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
import { types } from "../types";

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
export const removeFavorite = ( aid ) => ({
    type: types.removeFavorite,
    payload: aid,
})
export const addToFavorites = ( dataAsc ) => ({
    type: types.addToFavorite,
    payload: [ dataAsc ],
    
})


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