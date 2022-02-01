import React, { useState } from 'react'
import { useEffect } from 'react'
import { useIsMounted } from '../../hooks/useIsMounted'
import { HoverContentItemAscFromRegion } from './HoverContentItemAscFromRegion'

export const ItemHoverAscFrom = React.memo(({ data }) => {
    const [ dataAsc, setDataAsc ] = useState( null )
    const [isMounted] = useIsMounted();
    useEffect(() => {
        if ( isMounted ) {
            ( data !== "" ) && setDataAsc(JSON.parse(data));
        }

    }, [ setDataAsc, data, isMounted ])
    return (
        <div className="__item_tootTip_asc_from_region">
           {
               !!dataAsc 
                    ? <HoverContentItemAscFromRegion {...dataAsc }/>
                    : <p>Cargando...</p>
           }
        </div>
    )
})
