import { generateFormDataFromObject } from "../helpers/generateFormDataFromObject";
import { fetchGetInfoUser } from "../services/fetchGetInfoUser";
import { fetchUpdatePassword } from "../services/fetchUpdatePassword";
import { fetchUpdateUserData } from "../services/fetchUpdateUserData";
import { types } from "../types";
import { closeAlert, loadingInComponent, openAlert } from "./uiReducer";

export const getDataUserLoged = ( uid ) => {
    return ( dispatch ) => {
         fetchGetInfoUser( uid ).then( dataUser => {
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
                    lid:dataUser.lid,
                    land: dataUser.land,
                    landName: dataUser.landName,
                    idState: dataUser.idEstado,
                    nameState:dataUser.nameEstado,
                    idMun: dataUser.idMunicipio,
                    nameMun: dataUser.nameMun,
                    viewUbication: +dataUser?.viewUbication === 1 || false ,
                    lat:  dataUser?.lat,
                    lng: dataUser?.lng,
                    isVerify: (dataUser.isVerify === '1') || false, 
                }
            }
            dispatch( action );
        });
    }
}
export const logout = () => {
    sessionStorage.removeItem('token')
    localStorage.removeItem('uid')
    return {
        type: types.userLogout,
        payload: {}
    }
}
export const updateVerify = () => ({
    type:types.updateVerifier,
    payload: {isVerify:true}
})
export const updateAvatar = ({ image, displayName, file, uid }) => {

    return ( dispatch ) => {
        const token = sessionStorage.getItem( 'token' );
        const formData = generateFormDataFromObject({ displayName ,image:file, uid, token });
        fetchUpdateUserData( formData ).then( resp => {
            if ( resp.status === 'accept') {
                dispatch({
                    type: types.updateAvatar,
                    payload: { image }
                
                })
                console.log( resp )
            }
        }).catch( e => console.log(e) )
        
    }

}
export const addTOKEN = ( TOKEN ) => ({
    type: types.addTOKEN,
    payload: { TOKEN }
})
export const updatePasswordUser = ( password, newPassword ) => {
    return async ( dispatch ) => {
        dispatch( loadingInComponent( true ) );
        try {
            const resp = await fetchUpdatePassword({ password, newPassword });
            if( resp.status === 'accept' ) {
                dispatch( openAlert(
                    '¡Contraseña actualizada!',
                    resp.msg,
                    () => dispatch( closeAlert () )
                ));
            } else {
                dispatch( openAlert(
                    'Error',
                    'Ups... hubo un error al actualizar tu contraseña, intenta más tarde',
                    () => dispatch( closeAlert () )
                ));
            }
            dispatch( loadingInComponent( false ) );
        } catch( err ) {
            dispatch( openAlert(
                'Error',
                'Ups... hubo un error al actualizar tu contraseña, intenta más tarde',
                () => dispatch( closeAlert () )
            ));
            dispatch( loadingInComponent( false ) );
        }
    }
}
export const updateUserData = ( newData, oldData ) =>{
        return ( dispatch ) => {
            console.log(newData,newData?.viewUbication )
            const associationName = ( newData.associationName || oldData.displayName );
            const name = newData?.name || oldData.namePerson;
            const lastName = newData?.lastName || oldData.lastName;
            const secondlastName = newData?.secondlastName || oldData.secondlastName;
            const phone = newData?.phone|| oldData.phone;
            const rfc = newData?.rfc || oldData.rfc;
            const category = newData?.category || oldData.cid;
            const state = newData?.state || oldData.idState;
            const country = newData?.country || oldData.idMun;
            const viewUbication = typeof newData.viewUbication !== null ? newData.viewUbication : oldData.viewUbication 
            const lat = newData?.lat || oldData?.lat;
            const lng = newData?.lng || oldData.lng;
            const formData = generateFormDataFromObject( newData );
            fetchUpdateUserData( formData ).then( resp => {
                if ( resp.status === 'accept' ) {
                    dispatch({
                        type:types.updateUserData,
                        payload:{
                            displayName: ( oldData.typeUser === 'VOL' ) ? `${ name } ${ lastName }` : associationName ,
                            namePerson:name,
                            lastName,
                            secondlastName,
                            phone,
                            rfc,
                            cid:category,
                            category: resp?.nameCategory || oldData.category,
                            idState: state,
                            cityName: resp?.state || oldData.cityName,
                            landName: resp?.country || oldData.landName,
                            land: resp?.flag || oldData.land,
                            nameMun: resp?.city || oldData.nameMun,
                            idMun: country,
                            viewUbication,
                            lat,
                            lng
                        }
                    })
                }
            })

        }
    }

export const userLogedReducer = ( state = {}, action ) => {
    
    switch ( action.type ) {
        case types.userLoged:
           return {...state, ...action.payload};
        case types.userLogout:
           return action.payload;
        case types.updateVerifier:
           return {...state, ...action.payload}
        case types.updateAvatar:
           return {...state, ...action.payload}
        case types.updateUserData:
            return {...state, ...action.payload}
        case types.addTOKEN:
            return {...state, ...action.payload}
        default:
            return state;
    }

}