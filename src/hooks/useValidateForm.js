import { REGEX_INPUT_VALUES } from "../helpers/REGULAR_EXPRESSIONS";
import { MESSAGES_ERRORS } from "../helpers/MESSAGES_ERRORS";



export const useValidateForm = ( formValidations , formData ) => {

    const keys = Object.keys( formData );//Se obtienen el nombre de los datos dentro del objeto
    let OBJ_VALIDATE_TEMPORALLY = { ...formValidations };
    keys.forEach( keyName => {
        OBJ_VALIDATE_TEMPORALLY = {
            ...OBJ_VALIDATE_TEMPORALLY,
            ...validValue( keyName, formData[ keyName ] )
        };
        if ( keyName === 'confirmPass' ) {
            OBJ_VALIDATE_TEMPORALLY = {
                ...OBJ_VALIDATE_TEMPORALLY,
                ...validConfirmPassword( formData, keyName )
            };
        }
    });

    const isValid = !Object.values(  OBJ_VALIDATE_TEMPORALLY ).includes( true );
    
    return [ OBJ_VALIDATE_TEMPORALLY, isValid ];
}

const validValue = ( keyName, value ) => {

    const { [keyName]:regex } =  REGEX_INPUT_VALUES;
    // const keyErrorName = 'error'+keyName;
    return { 
        [ keyName ]: !regex.test( value ),
        [ 'error'+keyName ]: MESSAGES_ERRORS[ keyName ]
    };
}
const validConfirmPassword = ( formData, keyName ) => {
    console.log(formData[ 'password' ] !== formData[ keyName ])
    return ( formData[ 'password' ] !== formData[ keyName ] ) 
                ? { confirmPass:true, errorconfirmPass:'Las contraseñas no coinciden' }
                : { confirmPass:false, errorconfirmPass:'' }
    
}
