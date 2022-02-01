import { useEffect,useLayoutEffect, useState } from "react";
import { useIsMounted } from "./useIsMounted";
import { fetchGetCountrys } from "../services/fetchGetCountrys";
import { fetchGetStates } from "../services/fetchGetStates";
import { fetchGetLands } from "../services/fetchGetLands";

export const useChangeEffectLocation = ({land=0, state=0,country=0 }) => {
    const [ isMounted ] = useIsMounted();
    const [ arrayLands, setArrayLands ] = useState([]);
    const [ arrayStates, setArrayStates ] = useState([]);
    const [ arrayCountries, setArrayCountries ] = useState([]);
    useEffect(() => {
        if ( isMounted ) {
            // setArrayStates([])
            fetchGetLands().then( lands => {
                setArrayLands( lands );
            });

        }
    }, [isMounted])
    useLayoutEffect(() => {
        if ( isMounted ) {
            console.log(land);
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
