export const initialState = {
    startRegister: true,
    personData: false,
    locationData: false,
    userData:false,
    associationData: false,
    isFinish: false,
    titles: [
            "Muy bien, ingresa tus datos personales",
            "Genial, ahora indica tu localidad",
            "Ingresa los datos para tu usuario",
            "Indica los datos de tu asociación" ],
    progress: 0,
    totallyStep:0,
    actualStep:0,
    formData: {}
}
export const goToStartRegister = () => ({
    type:'go-to-start',
    payload: initialState,
})
export const goToPersonData = ( totallyStep, typeRegister ) => ({
    type:'start-register',
    payload:{
        startRegister: false,
        personData: true,
        locationData: false,
        userData:false,
        associationData: false,
        isFinish: false,
        progress: 25,
        totallyStep,
        actualStep:1,
        typeRegister,
    }
});
export const goToLocationData = () => ({
    type:'start-register',
    payload:{
        startRegister: false,
        personData: false,
        locationData: true,
        userData:false,
        associationData: false,
        isFinish: false,
        progress: 50,
        actualStep:2,
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
        progress: 75,
        actualStep:3,
    }
});
export const goToassociationData = ( ) => ({
    type:'start-register',
    payload:{
        startRegister: false,
        personData: false,
        locationData: false,
        userData:false,
        associationData: true,
        isFinish: false,
        progress: 100,
        actualStep:3,
    }
});
export const isFinishProcess = () => ({
    type:'start-register',
    payload:{ isFinish: true }
});
export const registerReducer = ( state = initialState , action ) => {
    switch ( action.type ) {
        case 'go-to-start':
            return action.payload
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