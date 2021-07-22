import { useState } from "react";
import { useIsMounted } from "./useIsMounted";


export const useViewSubMenu = ( initialState = false ) => {
    
    const [ isMounted ] = useIsMounted();
    const [ viewMenuIsActive, setViewMenuIsActive ] = useState( initialState );
    const handleViewMenu = () => {
       isMounted && setViewMenuIsActive( !viewMenuIsActive );
    };
    return [ viewMenuIsActive, handleViewMenu ];
}
