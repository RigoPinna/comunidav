import { paseDate } from "./paseDate"

  
const msgErrorNames = 'Debe contener mínimo dos letras, evite usar acentos y la letra "ñ"'
export const MESSAGES_ERRORS =  {
    name:msgErrorNames,
    lastName:msgErrorNames,
    secondlastName:msgErrorNames,
    phone:'Debe contener diez dígitos ej. 000-000-0000',
    rfc:'RFC inválido, comprueba tu RFC',
    land:'Por favor, seleccione el su pais',
    state:'Por favor, selecciona un estado',
    country:'Por favor, selecciona un municipio',
    email:'Al parecer el correo electrónico que proporcionaste es inválido, comprueba con otro.',
    userName:'Nombre de usuario inválido, debe contener al menos 4 caracteres, no pueden ser solo dígitos y no se aceptan los siguientes simbolos ¿?:',
    password:'La contraseña no cumple con nuestros requisitos',
    confirmPass:'Las contraseñas no coinciden',
    associationName:'No se aceptan los siguienets simbolos:!¡¿?#$%&/()=[]{}-_><, no utilices acentos y asegurate de no utilizar la letra "ñ".',
    category:'Por favor, selecciona una categoria.',
    description:'La descripción es muy corta, al menos debe de contener 30 caracteres',
    nameEvent:'El nombre del evento es muy corto, al menos debe contener 10 caracteres',
    ubication:'Ubicación erronea',
    image:'Asegurate de subir una imagen de tipo .png, .PNG, .jpg, .JPG, .jpeg, .JPEG',
    dateInit:`No puedes ingrear una fecha inicial menor al ${ paseDate( new Date() ).date }`,
    dateFinally:`Asegúrate que la fecha y hora de finalización sea posterior a la fecha de inicio establecida.`,
    requirement:'El requisito es muy corto, al menos debe de contener 30 caracteres',
    
}
