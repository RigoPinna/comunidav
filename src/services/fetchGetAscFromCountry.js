import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchGetAscFromCountry = async ( cid ) => {
    const { API } = SERVER_API;
    const uid = localStorage.getItem( 'uid' );
    const url = `${ API }getAscFromCountry.php?cid=${ encodeURI(cid) }&uid=${ encodeURI( uid ) }`;
    const resp = await fetch( url );
    const associations = await resp.json();

    return associations;
}
