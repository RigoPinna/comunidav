import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchGetInfoUser = async(uid) => {
    
    const { API } = SERVER_API;
    const formData = new FormData();
    formData.append( 'uid', uid );
    const url = `${ API }getInfoUserLoged.php`;
    const resp = await fetch( url , { method: 'POST', body: formData });
    const data = await resp.json();
    // const [ myInfo ] =  data;

    return  data;

}