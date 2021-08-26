import { useEffect, useRef } from "react"


export const useIsMounted = () => {

    const isMounted = useRef( true );
    useEffect(() => {
        
        return () => {
            console.log('aqui')
            isMounted.current = false;
        }
    }, [])

    return [ isMounted.current ];
}
