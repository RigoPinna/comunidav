import { generateFormDataFromObject } from "../helpers/generateFormDataFromObject";
import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchAddResponse = async( eid,pid, uid, response ) => {

    const { API } = SERVER_API;
    const formData = generateFormDataFromObject({ eid, pid, uid, response });
    const url = `${ API }addResponse.php`;
    const token = sessionStorage.getItem( 'token' );
    const resp = await fetch( url,{ method: 'POST', body: formData, headers: { 'x-token': token } } );
    const data = await resp.json();

    return data;
}
