import { useEffect, useState } from "react";
import { useIsMounted } from "./useIsMounted";
import { fetchGetCountrys } from "../services/fetchGetCountrys";
import { fetchGetStates } from "../services/fetchGetStates";

export const useChangeEffectLocation = ( inputFormValues ) => {
    const [ isMounted ] = useIsMounted();
    const [ arrayStates, setArrayStates ] = useState([]);
    const [ arrayCountries, setArrayCountries ] = useState([]);
    useEffect(() => {
        if ( isMounted ) {
            if ( !localStorage.getItem( 'statesLocation' )) {
                ( arrayStates.length <= 0 )
                && fetchGetStates().then( states => {
                    localStorage.setItem( 'statesLocation', JSON.stringify( states ) );
                    setArrayStates( states );
                });
            } else {
                if ( arrayStates.length <= 0 ) {
                    const state = JSON.parse( localStorage.getItem( 'statesLocation' ) );
                    setArrayStates( state );
                }
            }
        }
    }, [ isMounted, arrayStates ]);
    useEffect(() => {
        if ( isMounted ) {
            ( inputFormValues.state > 0 )
                && fetchGetCountrys( inputFormValues.state ).then( countries => {
                    setArrayCountries( countries );

                })   
        }
        
    }, [ inputFormValues.state ])

    return [ arrayStates, arrayCountries ];
}
