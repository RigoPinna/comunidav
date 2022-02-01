import { SERVER_API } from "../SERVER-API/SERVER-API";


export const fetchGetLands = async () => {

    const { API } = SERVER_API;
    const url = `${ API }getPaises.php`;
    const resp = await fetch( url );
    const data = await resp.json();
    
    return data

}