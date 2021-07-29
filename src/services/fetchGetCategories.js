import { SERVER_API } from "../SERVER-API/SERVER-API";


export const fetchGetCategories = async (  ) => {

    const { API } = SERVER_API;
    const url = `${ API }getCategories.php`;
    const resp = await fetch( url );
    const data = await resp.json();
    
    return data

}