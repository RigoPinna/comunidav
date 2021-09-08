import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchCreateEvent = async (uid, token,{ nameEvent, description, requirement, dateInit,hourInit, ubication, image }) => {
    const { API } = SERVER_API;
    const formData = new FormData();
    formData.append( 'uid',uid );
    formData.append( 'token',token );
    formData.append( 'nameEvent',nameEvent );
    formData.append( 'description',description );
    formData.append( 'requirement',requirement );
    formData.append( 'dateInit',dateInit );
    formData.append( 'hourInit',hourInit );
    formData.append( 'ubication',ubication );
    formData.append( 'image',image );
    const url = `${ API }CreateEvent.php`;
    const resp = await fetch( url,{ method: 'POST', body:formData } );
    const data = await resp.json();

    return data;
    
}