import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useIsMounted } from '../../hooks/useIsMounted';
import { IllustrationEmpty } from '../iconos/IllustrationEmpty';
import { LoadingInComponent } from '../loadings/LoadingInComponent';
import { ItemAssociation } from './ItemAssociation';
const statusMountedFavorites = {
    loading: undefined,
    empty: [],
}
export const FavoritesAssociations = () => {
    const { favoritesReducer } = useSelector( state => state );
    const [ isMounted ] = useIsMounted();
    const [ favorites, setfavorites ] = useState( statusMountedFavorites.loading );

    useEffect(() => {
        isMounted && setfavorites( 
            ( favoritesReducer.length > 0 ) 
                ? favoritesReducer 
                : statusMountedFavorites.empty 
        );
    }, [ favoritesReducer, isMounted ])
    return (
        <>
             {
                favorites === statusMountedFavorites.loading
                    ? <LoadingInComponent textLoading ={"Cargando favoritos.."} />
                    : ( favorites === statusMountedFavorites.empty ) 
                        ? <IllustrationEmpty message ={"No has guardado asociaciones a tus favoritos"}/>
                        : favorites.map( fav => <ItemAssociation key = { `fav-${ fav.idFavorite }` } { ...fav } isProfile={ false}/> )
            }
        </>
    )
}
