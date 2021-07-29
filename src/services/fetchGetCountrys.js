import { SERVER_API } from "../SERVER-API/SERVER-API";


export const fetchGetCountrys = async ( idState ) => {

    const { API } = SERVER_API;
    const url = `${ API }getMunicipios.php?idState=${ encodeURI( idState ) }`;
    const resp = await fetch( url );
    const data = await resp.json();
    
    return data

}
