export const initialState = {
    startRegister: true,
    personData: false,
    locationData: false,
    userData:false,
    associationData: false,
    isFinish: false,
    stepRegister: {
        titles: [
            "Datos personales",
            "Indica tu localidad",
            "Ingresa los datos para tu usuario",
            "Indica los datos de tu asociación" ],
        progress: 0,
    },
    formData: {}
}
export const goToPersonData = ( formData ) => ({
    type:'start-register',
    payload:{
        startRegister: false,
        personData: true,
        locationData: false,
        userData:false,
        associationData: false,
        isFinish: false,
        stepNumber:1,
        stepRegister: {
            titles: [
                "Datos personales",
                "Indica tu localidad",
                "Ingresa los datos para tu usuario",
                "Indica los datos de tu asociación" ],
            progress: 25,
        },
        formData
    }
});
export const goToLocationData = ( formData) => ({
    type:'start-register',
    payload:{
        startRegister: false,
        personData: false,
        locationData: true,
        userData:false,
        associationData: false,
        isFinish: false,
        stepRegister: {
            titles: [
                "Datos personales",
                "Indica tu localidad",
                "Ingresa los datos para tu usuario",
                "Indica los datos de tu asociación" ],
            progress: 50,
        },
        formData
    }
});
export const goToUserData = ( formData ) => ({
    type:'start-register',
    payload:{
        startRegister: false,
        personData: false,
        locationData: false,
        userData:true,
        associationData: false,
        isFinish: false,
        stepRegister: {
            titles: [
                "Datos personales",
                "Indica tu localidad",
                "Ingresa los datos para tu usuario",
                "Indica los datos de tu asociación" ],
            progress: 75,
        },
        formData
    }
});
export const goToassociationData = ( formData ) => ({
    type:'start-register',
    payload:{
        startRegister: false,
        personData: false,
        locationData: false,
        userData:false,
        associationData: true,
        isFinish: false,
        stepRegister: {
            titles: [
                "Datos personales",
                "Indica tu localidad",
                "Ingresa los datos para tu usuario",
                "Indica los datos de tu asociación" ],
            progress: 100,
        },
        formData
    }
});
export const isFinishProcess = () => ({
    type:'start-register',
    payload:{ isFinish: true }
});
export const registerReducer = ( state = initialState , action ) => {
    switch ( action.type ) {
        case 'start-register':
            
            return { ...state, ...action.payload}
        case 'location-data':
            
            return { ...state, ...action.payload}
        case 'user-data':
            return { ...state, ...action.payload}
    
        case 'association-data':
            return { ...state, ...action.payload}
        case 'is-finished':
            return { ...state, ...{ isFinished:true }};
        default:
            return state;
    }

}