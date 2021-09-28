import { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useIsMounted } from './useIsMounted';


export const useIsVerify = ( userLogedReducer ) => {
    const history = useHistory();
    const [ isMounted ] = useIsMounted();
    useEffect(()=> {
        if ( isMounted ) {
            const isDataNull = Object.keys( userLogedReducer ).length;
            ( !userLogedReducer.isVerify && isDataNull> 0 )
                && history.replace('/verify')
        }
    },[ userLogedReducer.isVerify ]);

}
