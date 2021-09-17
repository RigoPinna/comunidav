import { generateFormDataFromObject } from "../helpers/generateFormDataFromObject";
import { SERVER_API } from "../SERVER-API/SERVER-API";


export const fetchRegisterToGroup = async ( { uid },{ eid, idCreator } ) => {

    const { API } = SERVER_API;
    const token = sessionStorage.getItem( 'token' );
    const formData = generateFormDataFromObject({ uid, eid, token, idCreator });
    const url = `${ API }registerToGroup.php`;
    const resp = await fetch( url, { method: 'POST', body: formData });
    const data = await resp.json();

    return data;
}
