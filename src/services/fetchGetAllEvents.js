import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchGetAllEvents = async () => {
    const { API } = SERVER_API;
    const url = `${ API }getAllEvents.php`;
    const resp = await fetch( url );
    const data = await resp.json();

    return data;
}
