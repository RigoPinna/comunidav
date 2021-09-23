import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchIsParticipant = async ( eid, uid ) => {
    const { API } = SERVER_API;
    const token = sessionStorage.getItem( 'token' );
    const url = `${ API }getGroupEvent.php?eid=${ encodeURI( eid ) }&uid=${ encodeURI( uid ) }`;
    const resp = await fetch( url, { method: 'GET', headers:{ "x-token":token }});
    const data = await resp.json();

    return data
}
