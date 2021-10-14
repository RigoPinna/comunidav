import { generateFormDataFromObject } from "../helpers/generateFormDataFromObject";
import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchResetPassword = async ({ step, data }) => {

    const { API } = SERVER_API
    const body = { [step]:true, ...data }
    const formData = generateFormDataFromObject( body )
    const url = `${ API }resetPassword.php`

    const resp = await fetch( url, { method: 'POST', body: formData})
    const  dta= await resp.json()

    return dta

    
}
