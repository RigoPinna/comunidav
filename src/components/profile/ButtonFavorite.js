import React from 'react'
import ReactTooltip from 'react-tooltip';
import { useToggleFavorite } from '../../hooks/useToggleFavorite';
import { IconFavorite } from '../iconos/IconFavorite';
export const ButtonFavorite = ({ aid }) => {
    const  { isFavorite, hanldeToggleActionButton } = useToggleFavorite({ aid });
    return (
        <>
            <button
                onClick = { hanldeToggleActionButton } 
                data-for="btn-fav" 
                data-tip = { isFavorite ? 'Eliminar de mis favoritos' : 'Agregar a mis favoritos'}
                className={`__btn __btn_favorite ${ isFavorite ? '__btn_favorite_active ' : '' }`}>
                    <IconFavorite />
            </button>
            <ReactTooltip  id='btn-fav' type="dark" effect='solid' place="left" />
            
        </>
    )
}
