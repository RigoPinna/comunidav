import { REGEX_INPUT_VALUES } from "../helpers/REGULAR_EXPRESSIONS";


export const useValidateForm = ( formValidations , formData ) => {

    const keys = Object.keys( formData );
    let OBJ_VALIDATE_TEMPORALLY = {...formValidations};
    keys.forEach( keyName => {
        OBJ_VALIDATE_TEMPORALLY = {
            ...OBJ_VALIDATE_TEMPORALLY,
            ...validValue( keyName, formData[ keyName ])
        };
    });
    const isValid = !Object.values(  OBJ_VALIDATE_TEMPORALLY ).includes( true );
    return [ OBJ_VALIDATE_TEMPORALLY, isValid ];
}

const validValue = ( keyName, value ) => {
    const {[keyName]:regex } =  REGEX_INPUT_VALUES;
    return {
        [keyName]: !regex.test( value ),
    }
}
