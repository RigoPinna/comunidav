import { useState } from "react";
import { useIsMounted } from "./useIsMounted";


export const useViewSubMenu = ( ) => {
    
    const [ isMounted ] = useIsMounted();
    const [ viewMenuIsActive, setViewMenuIsActive ] = useState( false );
    const handleViewMenu = () => {
       isMounted && setViewMenuIsActive( !viewMenuIsActive );
    };
    return [ viewMenuIsActive, handleViewMenu ];
}
