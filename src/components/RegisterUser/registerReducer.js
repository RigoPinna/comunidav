export const initialState = {
    startRegister: true,
    personData: false,
    locationData: false,
    userData:false,
    associationData: false,
    isFinish: false,
    stepNumber: 0,
    
}
export const goToPersonData = () => ({
    type:'start-register',
    payload:{
        startRegister: false,
        personData: true,
        locationData: false,
        userData:false,
        associationData: false,
        isFinish: false,
        stepNumber:1,
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
        stepNumber:2,
    }
});
export const goToUserData = () => ({
    type:'start-register',
    payload:{
        startRegister: false,
        personData: false,
        locationData: false,
        userData:true,
        associationData: false,
        isFinish: false,
        stepNumber:3,
    }
});
export const goToassociationData = () => ({
    type:'start-register',
    payload:{
        startRegister: false,
        personData: false,
        locationData: false,
        userData:false,
        associationData: true,
        isFinish: false,
        stepNumber:4,
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