import { generateFormDataFromObject } from "../helpers/generateFormDataFromObject";
import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchAcceptTerms = async ( uid ) => {

    const { API } = SERVER_API
    const url = `${ API }addPublication.php`

    const token = sessionStorage.getItem( 'token' )

    const formData = generateFormDataFromObject({ uid, token })
    const resp = await fetch( url,{ method: 'POST', body: formData } );
    const data = await resp.json();

    return data


}
