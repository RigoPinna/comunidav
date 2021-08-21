import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchUpdateUserData = async( formData ) => {
    
    const { API } = SERVER_API;
    const uid = localStorage.getItem( 'uid' );
    const token =sessionStorage.getItem( 'token' );

    formData.append( 'uid', uid )
    formData.append( 'token', token )
    const url = `${ API }updateUser.php`;
    const resp = await fetch( url , { method: 'POST', body: formData });
    const data = await resp.json();
    return  data;
   
}
