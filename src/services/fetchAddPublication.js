import { generateFormDataFromObject } from "../helpers/generateFormDataFromObject";
import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchAddPublication = async( eid, uid, desc ) => {

    const { API } = SERVER_API;
    const token = sessionStorage.getItem( 'token' );
    const formData = generateFormDataFromObject({ eid, uid, desc, token });
    const url = `${ API }addPublication.php`;
    const resp = await fetch( url,{ method: 'POST', body: formData } );
    const data = await resp.json();

    return data;
}