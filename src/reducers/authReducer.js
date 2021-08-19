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
                    namePerson: dataUser.namePerson,
                    lastName: dataUser.lastName,
                    secondlastName: dataUser.lastName2,
                    phone: dataUser.phone,
                    rfc:dataUser.rfc,
                    text: dataUser.typeUser,
                    cityName:dataUser.nameEstado,
                    shortCityName: dataUser.abrestado,
                    aid: dataUser?.aid,
                    cid: dataUser?.idCategory,
                    category: dataUser?.category ,
                    description:  dataUser?.description,
                    idState: dataUser.idEstado,
                    idMun: dataUser.idMunicipio,
                    isVerify: (dataUser.isVerify === '1') || false, 
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
    payload: {isVerify:true}
})
export const updateAvatar = ( image ) => ({
    type: types.updateAvatar,
    payload: { image }

});

export const updateUserData = ( newData, oldData) =>{
        // const { categoryName, stateName } = await fetchUpdateUserData( newData, typeUser );
        const associationName = ( newData.associationName || oldData.displayName );
        const name = newData?.name || oldData.namePerson;
        const lastName = newData?.lastName || oldData.lastName;
        const secondlastName = newData?.secondlastName || oldData.secondlastName;
        const phone = newData?.phone|| oldData.phone;
        const rfc = newData?.rfc || oldData.rfc;
        const category = newData?.category || oldData.cid;
        const state = newData?.state || oldData.idState;
        const country = newData?.country || oldData.idMun;
        return {
            type:types.updateUserData,
            payload:{
                displayName: ( oldData.typeUser === 'VOL' ) ? `${ name } ${ lastName }` : associationName ,
                namePerson:name,
                lastName,
                secondlastName,
                phone,
                rfc,
                cid:category,
                // category: oldData.category,
                idState: state,
                // cityName: stateName,
                idMun: country
            }
        }

    }

export const userLogedReducer = ( state = {}, action ) => {
    
    switch ( action.type ) {
        case types.userLoged:
           return action.payload;
        case types.userLogout:
           return action.payload;
        case types.updateVerifier:
           return {...state, ...action.payload}
        case types.updateAvatar:
           return {...state, ...action.payload}
        case types.updateUserData:
            return {...state, ...action.payload}
        default:
            return state;
    }

}