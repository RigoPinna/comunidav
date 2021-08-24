import { useEffect,useLayoutEffect, useState } from "react";
import { useIsMounted } from "./useIsMounted";
import { fetchGetCountrys } from "../services/fetchGetCountrys";
import { fetchGetStates } from "../services/fetchGetStates";
import { fetchGetLands } from "../services/fetchGetLands";

export const useChangeEffectLocation = ({land, state,country }) => {
    const [ isMounted ] = useIsMounted();
    const [ arrayLands, setArrayLands ] = useState([]);
    const [ arrayStates, setArrayStates ] = useState([]);
    const [ arrayCountries, setArrayCountries ] = useState([]);
    useEffect(() => {
        if ( isMounted ) {
            setArrayStates([])
            fetchGetLands().then( lands => {
                setArrayLands( lands );
            });

        }
    }, [isMounted])
    useLayoutEffect(() => {
        if ( isMounted ) {
            setArrayCountries([])
                fetchGetStates( land ).then( states => {
                    setArrayStates( states );
                });
            }
        
    }, [ isMounted, land ]);
    useLayoutEffect(() => {
        if ( isMounted ) {

                fetchGetCountrys( state ).then( countries => {
                    setArrayCountries( countries );
                })   
        }

    }, [isMounted, state])

    return [ arrayLands, arrayStates, arrayCountries ];
}
