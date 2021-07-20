import { useEffect, useRef } from "react"


export const useIsMounted = () => {

    const isMounted = useRef( true );
    useEffect(() => {
        
        return () => {
            console.log('desmontado')
            isMounted.current = false;
        }
    }, [])

    return [ isMounted.current ];
}
