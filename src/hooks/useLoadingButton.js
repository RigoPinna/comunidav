import { useState } from "react";


export const useLoadingButton = (  ) => {
    const [ isLoading, setLoading ] = useState( false );

    return [ isLoading, setLoading ]
}
