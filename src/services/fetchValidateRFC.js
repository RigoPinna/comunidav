import { SERVER_API } from "../SERVER-API/SERVER-API";


export const fetchValidateRFC = async ( rfc ) => {

    const { API } = SERVER_API;

    const formData = new FormData();
    formData.append( 'rfc', rfc );
    const url = `${ API }validateRFC.php`;
    const resp = await fetch( url, { method: 'POST', body: formData });
    const data = await resp.json();
    
    return data
    
}
