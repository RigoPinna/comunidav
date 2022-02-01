import { generateFormDataFromObject } from "../helpers/generateFormDataFromObject";
import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchAddResponse = async( eid,pid, uid, response ) => {

    const { API } = SERVER_API;
    const token = sessionStorage.getItem( 'token' );
    const formData = generateFormDataFromObject({ eid, pid, uid, response, token });
    const url = `${ API }addResponse.php`;
    const resp = await fetch( url,{ method: 'POST', body: formData} );
    const data = await resp.json();

    return data;
}
