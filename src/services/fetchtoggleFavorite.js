import { SERVER_API } from "../SERVER-API/SERVER-API";
import { generateFormDataFromObject } from "../helpers/generateFormDataFromObject";


export const fetchtoggleFavorite = async ( aid, uid ) => {
    const { API } = SERVER_API;
    const token = sessionStorage.getItem( 'token' );
    const formData = generateFormDataFromObject({ aid, uid, token });
    const url = `${ API }toggleFavorite.php`;

    const resp = await fetch( url,{ method:'POST', body: formData });
    const data = await resp.json();

    return data;
}
    
