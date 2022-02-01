import { useEffect } from "react";

//No agregar las dependecias al useEffect
export const useIsLoged = ( history, location ) => {
    useEffect(() => {
        if ( !(localStorage.getItem('uid') && sessionStorage.getItem('token')) ) {
            ( location.pathname !=='/login')
                &&  history.replace(`/login`);
        }
        
    }, []);
}
