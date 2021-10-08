import { generateFormDataFromObject } from "../helpers/generateFormDataFromObject";
import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchIsParticipant = async ( eid, uid ) => {
    const { API } = SERVER_API;
    const token = sessionStorage.getItem( 'token' );
    const formData = generateFormDataFromObject({eid, uid,token})
    const url = `${ API }getGroupEvent.php`;
    const resp = await fetch( url, { method: 'POST', body: formData } );
    const data = await resp.json();

    return data
}
