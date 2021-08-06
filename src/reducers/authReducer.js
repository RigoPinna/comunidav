import { fetchGetInfoUserLoged } from "../services/fetchGetInfoUserLoged";
import { verifyUserCode } from "../services/fetchVerifyUserCode";
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
                    email: dataUser.email,
                    image: dataUser.image,
                    displayName:dataUser.displayName,
                    text: dataUser.typeUser,
                    cityName:dataUser.nameEstado,
                    shortCityName: dataUser.abrestado,
                    aid: dataUser?.aid,
                    category: dataUser?.category ,
                    description:  dataUser?.description,
                    idMun: dataUser.idMunicipio,
                    isVerify: dataUser.isVerify
                }
            }
            dispatch( action );
        });
    }
}
export const logout = () => ({
    type: types.userLogout,
    payload: {}
})
export const updateVerify = () => ({
    type:types.updateVerifier,
    payload: {isVerify:'0'}
}) 
export const userLogedReducer = ( state = {}, action ) => {
    
    switch ( action.type ) {
        case types.userLoged:
           return action.payload;
        case types.userLogout:
           return action.payload;
        case types.updateVerifier:
           return {...state, ...action.payload}

        default:
            return state;
    }

}