import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchForwardCode = async ( email, displayName ) => {
    const { API } = SERVER_API;
    const formData = new FormData();
    formData.append( 'email',email );
    formData.append( 'name',displayName );
    const url = `${ API }forwardCode.php`;
    const resp = await fetch( url,{ method: 'POST', body:formData } );
    const data = await resp.json();

    return data;
    
}
