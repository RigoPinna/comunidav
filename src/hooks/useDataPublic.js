import { useEffect, useState } from 'react';
import { useParams } from 'react-router'
import { fetchGetInfoUser } from '../services/fetchGetInfoUser';
const STATE_SEARCH_USER = {
    loading:true,
    error404: null,
    found:'fond',
}
export const useDataPublic = () => {
    const { uid } = useParams();
   const [ stateSearch, setStateSearch ] = useState( STATE_SEARCH_USER.loading );
   const [ userData, setUserData ] = useState( null );

   useEffect(() => {
        setStateSearch( STATE_SEARCH_USER.loading );
        setUserData( null );
       ( async () => {
           const resp =  await fetchGetInfoUser( uid );
           if( resp?.uid ) {
               if ( !(resp.typeUser === 'VOL') ) {
                setUserData( resp );
                setStateSearch( STATE_SEARCH_USER.found )

               } else {
                setStateSearch( STATE_SEARCH_USER.error404 )
               }
           } else {
            setStateSearch( STATE_SEARCH_USER.error404 )
           }
       })();
   }, [ uid ]);
   return  [stateSearch, userData, STATE_SEARCH_USER ]; 
    
}
