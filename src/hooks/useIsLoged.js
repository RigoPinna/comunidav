import { useEffect } from "react";


export const useIsLoged = ( history, location ) => {

    useEffect(() => {
        if ( localStorage.getItem('uid') ) {
            const uid = localStorage.getItem( 'uid' );
            history.replace( `/association/${ uid }` );
        } else {

            ( location.pathname !=='/login')
                &&  history.replace(`/login`);
        }
    }, []);

    
    
}
