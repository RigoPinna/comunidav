import { SERVER_API } from "../SERVER-API/SERVER-API";


export const fetchGetStates = async ( pid ) => {

    const { API } = SERVER_API;
    const url = `${ API }getEstados.php?pid=${pid}`;
    const resp = await fetch( url );
    const data = await resp.json();
    
    return data

}
