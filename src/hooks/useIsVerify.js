import { useLayoutEffect } from 'react';
import { useIsMounted } from './useIsMounted';


export const useIsVerify = ( history, userLogedReducer ) => {
    const [ isMounted ] = useIsMounted();
    useLayoutEffect(()=> {
        if ( isMounted ) {
            const isDataNull = Object.keys( userLogedReducer ).length;
            ( !userLogedReducer.isVerify && isDataNull> 0 )
                && history.replace('/verify')
            
        }
    },[ userLogedReducer ]);

}
