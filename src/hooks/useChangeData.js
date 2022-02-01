import { useEffect, useState } from 'react'

export const useChangeData = ( newData, oldData ) => {
const [ isDiferent, setIsDiferent ] = useState( false );
    useEffect(() => {
        const arrayNewValues = JSON.stringify( Object.values( newData ) ) ;
        const arrayOldValues = JSON.stringify( Object.values( oldData ) );
        ( arrayNewValues === arrayOldValues )
            ? setIsDiferent( false )
            : setIsDiferent( true );
    }, [ newData, oldData ])
    return [ isDiferent,setIsDiferent ]
}
