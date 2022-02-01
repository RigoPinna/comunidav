import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchRegisterUser = async({name,lastName,secondlastName, phone, rfc, country, userName, email, password, associationName, description, category}) => {
    
    const { API } = SERVER_API;
    const formData = new FormData();
    
    formData.append( 'name', name );
    formData.append( 'lastName', lastName );
    formData.append( 'secondlastName', secondlastName );
    formData.append( 'phone', phone );
    formData.append( 'rfc', rfc );
    formData.append( 'country', country );
    formData.append( 'userName', userName );
    formData.append( 'email', email );
    formData.append( 'password', password );
    if ( !!associationName ) {
        formData.append( 'associationName', associationName );
        formData.append( 'description', description );
        formData.append( 'category', category );
    }
    const url = `${ API }registerUser.php`;
    const resp = await fetch( url , { method: 'POST', body: formData });
    const data = await resp.json();
    return  data;
   
}