import { generateFormDataFromObject } from "../helpers/generateFormDataFromObject";
import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchUpdatePassword = async ({ password, newPassword }) => {
    const { API } = SERVER_API;
    const url =`${ API }updateUser.php`;
    const uid = localStorage.getItem( 'uid' );
    const token = sessionStorage.getItem( 'token' );
    const formData = generateFormDataFromObject({ uid, token, password, newPassword });
    const resp = await fetch( url , { method: 'POST', body: formData });
    const data = await resp.json();

    return data;
}
