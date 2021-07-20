import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchGetEventUser = async( uid ) => {

    const { API } = SERVER_API;
    const formData = new FormData();
    formData.append( 'uid', uid );
    const url = `${ API }getEventsUser.php`;
    const resp = await fetch( url , { method: 'POST', body: formData });
    const data = await resp.json();
    return  data;
   
}
