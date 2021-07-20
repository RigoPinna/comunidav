import { fetchGetInfoUserLoged } from "../services/fetchGetInfoUserLoged";
import { types } from "../types";



export const getDataUserLoged = ( uid ) => {
    return ( dispatch ) => {
         fetchGetInfoUserLoged( uid ).then( dataUser => {
            const action = {
                type: types.userLoged,
                payload: {
                    typeUser: dataUser.typeUser,
                    uid: dataUser.uid,
                    userName: dataUser.userName ,
                    image: dataUser.image,
                    displayName:( dataUser?.nameAsc ) ? dataUser.nameAsc : dataUser.namePerson,
                    text: dataUser.typeUser,
                    cityName:dataUser.nameEstado,
                    shortCityName: dataUser.abrestado,
                    aid: dataUser?.aid,
                    category: dataUser?.category ,
                    description:  dataUser?.description,
                    idMun: dataUser.idMunicipio,
                }
            }
            dispatch( action );
        });
    }
}

export const userLogedReducer = ( state = {}, action ) => {
    
    switch ( action.type ) {
        case types.userLoged:
           return action.payload;
    
        default:
            return state;
    }

}