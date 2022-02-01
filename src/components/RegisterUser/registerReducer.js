export const initialState = {
    startRegister: true,
    personData: false,
    locationData: false,
    userData:false,
    associationData: false,
    isFinish: false,
    isFinishFetch: false,
    respFetch:'',
    typeRegister:'',
    titles: [
            "Muy bien, ingresa tus datos personales",
            "Genial, ahora indica tu localidad",
            "Excelente, ingresa los datos para tu usuario",
            "Indica los datos de tu asociación" ],
    progress: 0,
    totallyStep:0,
    actualStep:0,
    formData: {
        name:'',
        lastName:'',
        secondlastName: '',
        phone:'',
        rfc:'',
    },
    isAceptedRFC: false,
}
export const viewAlertRFC = ( view ) => ({
    type: 'view-alert-rfc',
    payload: {
        isAceptedRFC: view
    }
})
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
        formData: {},
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
        progress: 50,
        actualStep:2,
        formData,
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
        formData,
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
        progress: 100,
        actualStep:4,
        formData
    }
});
export const isFinishProcess = ( formData, viewAlert ) => ({
    type:'start-register',
    payload:{ isFinish: viewAlert, formData }
});
export const isFinishFetching = ( respFetch, status = false ) =>({
    type:'is-finished-fetch',
    payload:{ 
        isFinishFetch: true,
        respFetch,
        status
    }
})
export const registerReducer = ( state = initialState , action ) => {
    
    const { formData } = state;
    const { formData:dataSended } = action.payload;
    const newFormData = {...formData, ...dataSended};
    action.payload = {...action.payload, ...{ formData: newFormData }};

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
            return { ...state, ...action.payload};
        case 'is-finished-fetch':
            return { ...state, ...action.payload };
        case 'view-alert-rfc':
            return { ...state, ...action.payload };
        default:
            return state;
    }

}