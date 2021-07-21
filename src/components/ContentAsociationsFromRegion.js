import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIsMounted } from '../hooks/useIsMounted'
import { getAssociationsHaveRegion } from '../reducers/asocitionsFromRegionReducer'
import { ItemUser } from './Items/ItemUser'
import { ItemUserLoading } from './loadings/ItemUserLoading'

export const ContentAsociationsFromRegion = ({historyRouter}) => {

    const [ isLoading, setIsLoading ] = useState( true );
    const { asociationsRegionReducer, userLogedReducer } = useSelector( state => state );
    const dispatch = useDispatch();
    const [ isMounted ] = useIsMounted();
    const { uid, idMun } = userLogedReducer;
    useEffect(() => {
        if ( isMounted ) {
            if ( !!uid && !!idMun ) {
                if( asociationsRegionReducer.length <= 0 && !!uid ) {
                    dispatch( getAssociationsHaveRegion( uid, idMun ) );
                    setIsLoading( false );
                    
                }
            }
        }
    }, [ dispatch, isMounted, uid, idMun,asociationsRegionReducer ]);
    
    const handleRedirectToProfileAsc = ( uid ) => {
        historyRouter.push(`/association/${ uid }`)
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
