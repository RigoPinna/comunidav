import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIsMounted } from '../hooks/useIsMounted'
import { getAssociationsHaveRegion } from '../reducers/asocitionsFromRegionReducer'
import { ItemAssociationFromRegion } from './Items/ItemAssociationFromRegion'
// import { ItemUser } from './Items/ItemUser'
import { ItemUserLoading } from './loadings/ItemUserLoading'

export const ContentAsociationsFromRegion = ( { historyRouter, userData } ) => {
    const [ isLoading, setIsLoading ] = useState( true )
    const { asociationsRegionReducer } = useSelector( state => state );
    const dispatch = useDispatch();
    const [ isMounted ] = useIsMounted();
    useEffect(() => {
        if ( isMounted ) {
            if ( userData !== undefined ) {
                if( isLoading ) {
                    const { uid, idState } = userData;
                    ( asociationsRegionReducer.length <= 0 ) && dispatch( getAssociationsHaveRegion( uid, idState ) );
                    setIsLoading( false );
                }
            }
        }
    }, [ userData, asociationsRegionReducer, setIsLoading, isMounted, dispatch, isLoading ] );
    

    if ( isLoading ) {
        return (
            
            <div className="__wrapper_colunm_right_content_asociations">
                <ItemUserLoading />
                <ItemUserLoading />
                <ItemUserLoading />
            </div>
        );
    }
    return (
        <div className="__wrapper_colunm_right_content_asociations">
          { 
            asociationsRegionReducer.length > 0
                ? asociationsRegionReducer.map( associationData => 
                    <ItemAssociationFromRegion 
                        key={`From-Asc-${associationData.uid}`}
                        {...associationData} 
                        historyRouter = { historyRouter }/>  )
                :<p>No hay asociaciones</p>
          }
          
            
        </div>
    )
}
