import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchGetAssociationsFromRegion = async( uid, idMunicipio ) => {
    
    const { API } = SERVER_API;
    const url = `${ API }getAssociationsFromRegion.php?uid=${ encodeURI( uid ) }&eid=${ encodeURI( idMunicipio ) }`;
    const resp = await fetch( url );
    const data = await resp.json();

    return  data;

}