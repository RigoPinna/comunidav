import { useEffect, useState } from "react";


export const useSaveData = () => {
    const [isSaved, setIsSaved] = useState( false )
    useEffect(() => {
        const idInterval = setInterval(() => {
            ( isSaved ) && setIsSaved( false );
                clearInterval( idInterval );
            
        }, 6000);
        return () => {
            clearInterval( idInterval );
        }
    }, [ isSaved ])

    return [ isSaved, setIsSaved ];
   
}
