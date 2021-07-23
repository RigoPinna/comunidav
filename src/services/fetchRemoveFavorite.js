

export const fetchRemoveFavorite = () => {
    const { API } = SERVER_API;
    const formData = new FormData();
    formData.append( 'uid', uid );
    formData.append( 'fid', fid );
    const url = `${ API }removeFavorite.php`;
    const resp = await fetch( url , { method: 'POST', body: formData });
    const data = await resp.json();
    return  data;
}
