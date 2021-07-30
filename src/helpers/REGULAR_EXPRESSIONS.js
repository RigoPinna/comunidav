const REGEX_PERSON_DATA = {
    name:/(^([A-Za-z]+)([\w]*))$/,
    lastName:/([A-Za-z\s]{2,20})$/,
    secondlastName:/([A-Za-z\s]{2,20})$/,
    phone:new RegExp( '^([0-9]{10})$'),
    rfc:new RegExp( '^((^[A-Z]{1})([A-Z0-9]{12}))$' ),

}
const REGEX_LOCATION = {
    state:/(^([0-9]{1,2}))$/,
    country:/(^([0-9]{1,2}))$/,
}
const REGEX_USER_DATA = {
    email:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
    userName:/(^([A-Za-z]+)([\w]*))$/,
    password:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([$@!%*?&]*)([A-Za-z\d@$!%*?&]|[^ ]){8,32}$/,
    confirmPass:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([$@!%*?&]*)([A-Za-z\d@$!%*?&]|[^ ]){8,32}$/,
}
const REGEX_ASOCIATION_DATA = {
    associationName:/^([A-Za-z.0-9\s]{3,50})$/,
    category:/(^([0-9]{1}))$/,
    description:/^(([a-zA-Z0-9A-ZÀ-ÿ\u00f1\u00d1.$%&/()=?¿!.¡",:;\-_\s]){30,1000})$/
}
export const REGEX_INPUT_VALUES = {
    name:/(^([A-Za-z]+)([\w]*))$/,
    lastName:/([A-Za-z\s]{2,20})$/,
    secondlastName:/([A-Za-z\s]{2,20})$/,
    phone:new RegExp( '^([0-9]{10})$'),
    rfc:new RegExp( '^((^[A-Z]{1})([A-Z0-9]{12}))$' ),
    state:/(^([0-9]{1,2}))$/,
    country:/(^([0-9]{1,2}))$/,
    email:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
    userName:/(^([A-Za-z]+)([\w]*))$/,
    password:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([$@!%*?&]*)([A-Za-z\d@$!%*?&]|[^ ]){8,32}$/,
    confirmPass:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)([$@!%*?&]*)([A-Za-z\d@$!%*?&]|[^ ]){8,32}$/,
    associationName:/^([A-Za-z.0-9\s]{3,50})$/,
    category:/(^([0-9]{1}))$/,
    description:/^(([a-zA-Z0-9A-ZÀ-ÿ\u00f1\u00d1.$%&/()=?¿!.¡",:;\-_\s]){30,1000})$/
}