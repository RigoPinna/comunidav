import { SERVER_API } from "../SERVER-API/SERVER-API";

export const fetchVerifyUserCode = async({ c1,c2,c3 }, email) => {
    const { API } = SERVER_API;
    const formData = new FormData();
    formData.append( 'c1',c1 );
    formData.append( 'c2',c2 );
    formData.append( 'c3',c3 );
    formData.append( 'email',email );
    const url = `${ API }verifyCode.php`;
    const resp = await fetch( url,{ method: 'POST', body:formData } );
    const data = await resp.json();

    return data;
}
