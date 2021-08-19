import { useEffect, useState } from 'react'

export const useChangeData = ( newData, oldData ) => {
const [ isDiferent, setisDiferent ] = useState( false );
    useEffect(() => {
        console.log('ej')
        const arrayNewValues = JSON.stringify( Object.values( newData ) ) ;
        const arrayOldValues = JSON.stringify( Object.values( oldData ) );
        ( arrayNewValues === arrayOldValues )
            ? setisDiferent( false )
            : setisDiferent( true );
    }, [ newData ])
    return [ isDiferent ]
}
