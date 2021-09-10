import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchDeleteEvent = async ( eid, uid, token ) => {
    const { API } = SERVER_API;
    const formData = new FormData();
    formData.append( 'uid',uid );
    formData.append( 'token',token );
    formData.append( 'eid',eid );
    const url = `${ API }deleteEvent.php`;
    const resp = await fetch( url,{ method: 'POST', body:formData } );
    const data = await resp.json();

    return data;
    
}