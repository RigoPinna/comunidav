import React from 'react'
import { useSelector } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { useToggleFavorite } from '../../hooks/useToggleFavorite';
import { IconFavorite } from '../iconos/IconFavorite';
import { LoadingInComponent } from '../loadings/LoadingInComponent';
export const ButtonFavorite = ( dataCreator ) => {
    const { uiReducer, userLogedReducer } = useSelector( state => state );
    const  { isFavorite, hanldeToggleActionButton } = useToggleFavorite( dataCreator, userLogedReducer.uid );
    return (
        <>
            <button
                disabled = { uiReducer.loadingInComponent }
                onClick = { hanldeToggleActionButton } 
                data-for="btn-fav" 
                data-tip = { isFavorite ? 'Eliminar de mis favoritos' : 'Agregar a mis favoritos'}
                className={`__btn __btn_favorite ${ isFavorite ? '__btn_favorite_active ' : '' }`}>
                    {
                        uiReducer.loadingInComponent 
                            ? <LoadingInComponent />
                            : <IconFavorite />
                    }
                    
            </button>
            <ReactTooltip  id='btn-fav' type="dark" effect='solid' place="left" />
            
        </>
    )
}
