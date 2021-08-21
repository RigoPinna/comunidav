import { useEffect } from "react";

//No agregar las dependecias al useEffect
export const useIsLoged = ( history, location ) => {

    useEffect(() => {
        if ( localStorage.getItem('uid') && sessionStorage.getItem('token') ) {
            const uid = localStorage.getItem( 'uid' );
            history.replace( `/user?q=${ uid }` );
        } else {
            ( location.pathname !=='/login')
                &&  history.replace(`/login`);
        }
    }, [ ]);
}
