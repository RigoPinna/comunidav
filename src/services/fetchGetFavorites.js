import { SERVER_API } from "../SERVER-API/SERVER-API";


export const fetchGetFavorites = async ( uid ) => {

    const { API } = SERVER_API;
    const formData = new FormData();
    formData.append( 'uid', uid );
    const url = `${ API }getFavorites.php`;
    const resp = await fetch( url , { method: 'POST', body: formData });
    const data = await resp.json();
    return  data;
}
