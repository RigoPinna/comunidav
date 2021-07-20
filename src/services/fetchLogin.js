import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchLogin = async( {user, password}, setLoading ) => {
    
    const { API } = SERVER_API;
    const formData = new FormData();
    formData.append( 'userName', user );
    formData.append( 'password', password );
    const url = `${ API }login.php`;
    const resp = await fetch( url , { method: 'POST', body: formData });
    const data = await resp.json();
    return  data;
   
}
