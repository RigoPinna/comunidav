import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIsMounted } from '../hooks/useIsMounted'
import { getAssociationsHaveRegion } from '../reducers/asocitionsFromRegionReducer'
import { ItemUser } from './Items/ItemUser'
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
                    const { uid, idMun } = userData;
                    ( asociationsRegionReducer.length <= 0 ) && dispatch( getAssociationsHaveRegion( uid, idMun ) );
                    setIsLoading( false );
                }
            }
        }
    }, [ userData, asociationsRegionReducer, setIsLoading, isMounted, dispatch, isLoading ] );
    
    const handleRedirectToProfileAsc = ( uid ) => {
        historyRouter.push( `/user?q=${uid}` );
    }
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
                ? asociationsRegionReducer.map( ({ uid, ascName, userName, image, category }) => { 
                    return ( 
                        <ItemUser 
                            handle={ () => { handleRedirectToProfileAsc( uid ) } }
                            key ={ `ascFromRegion-${uid}` }
                            displayName = { ascName } 
                            textSecondary = { category ? `Categoria • ${ category }` : userName } 
                            image = { image }
                    />)
                })
                :<p>No hay asociaciones</p>
          }
          
            
        </div>
    )
}
