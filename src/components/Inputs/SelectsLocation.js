import React, { useEffect, useState } from 'react';
import { useIsMounted } from '../../hooks/useIsMounted'
import { fetchGetStates } from '../../services/fetchGetStates';

export const SelectsLocation = () => {
    const [ isMounted ] = useIsMounted();
    const [ arrayState, setArrayStates ] = useState([]);
    const [ arrayCountry, setArrayCountry ] = useState([]);
    useEffect(() => {
        if ( isMounted ) {
            ( arrayState.length <= 0 )
            && fetchGetStates().then( states => {
                setArrayStates( states );
            });
        }
    }, [ isMounted ]);
    return (
        <>
            <div className = "__input_wrapper">
                <select name = { 'state' }>
                    <option                     
                    >
                        --Selecciona tu estado
                    </option>
                    {
                        arrayState.length > 0
                            && arrayState.map( ({ id, stateName }) => {
                                return <option key = {`state-${id}`} value ={ id } >{ stateName }</option>
                            })
                    }
                </select>
            </div>
            <div className = "__input_wrapper">
                <select name = { 'country' }>
                    <option 
                        value = { 0 } 
                    >
                        --Selecciona tu municipio
                    </option>
                </select>
            </div>
        </>
    )
}
