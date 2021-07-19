import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIsMounted } from '../hooks/useIsMounted'
import { getAssociationsHaveRegion } from '../reducers/asocitionsFromRegionReducer'
import { ItemUser } from './Items/ItemUser'
import { ItemUserLoading } from './loadings/ItemUserLoading'

export const ContentAsociationsFromRegion = () => {

    const [ dataAsociations, setDataAsociations ] = useState({ isLoading: true, data:[] } );
    const { asociationsRegionReducer, userLogedReducer } = useSelector( state => state );
    const dispatch = useDispatch();
    const [ isMounted ] = useIsMounted();
    
    useEffect(() => {
        if ( isMounted ) {
            
            if ( userLogedReducer !== {} ) {
                const { uid, idMunicipio } = userLogedReducer;
                if( asociationsRegionReducer.length <= 0 && !!uid ) {
                    dispatch( getAssociationsHaveRegion( uid, idMunicipio ) );
                    setDataAsociations({
                        isLoading: false,
                        data:asociationsRegionReducer,
                    })
                }
            }
        }
    }, [ dispatch, isMounted, userLogedReducer ]);

    return (
        <div className="__wrapper_colunm_right_content_asociations">
          { dataAsociations.isLoading && <ItemUserLoading />}
          { dataAsociations.isLoading && <ItemUserLoading />}
          { dataAsociations.isLoading && <ItemUserLoading />}
          { 
            !dataAsociations.isLoading 
                && asociationsRegionReducer.map( ({uid, ascName, userName, image, category }, i) => { 
                    return ( 
                        <ItemUser 
                            handle={ ()=>{ console.log('click')}}
                            key ={ `ascFromRegion-${uid}` }
                            displayName = { ascName } 
                            textSecondary = { category ? `Categoria • ${ category }` : userName } 
                            image = { image }
                    />)
                })
          }
          
            
        </div>
    )
}
