import { SERVER_API } from "../SERVER-API/SERVER-API";


export const fetchValidateUser = async ( username, email ) => {
    const { API } = SERVER_API;

    const formData = new FormData();
    formData.append( 'userName', username );
    formData.append( 'email', email );
    const url = `${ API }validateUser.php`;
    const resp = await fetch( url, { method: 'POST', body: formData });
    const data = await resp.json();
    
    return data
}
