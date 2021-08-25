import React from 'react'
import { useDispatch } from 'react-redux'
import { useIsMounted } from '../../hooks/useIsMounted'
import { useToggleFavorite } from '../../hooks/useToggleFavorite'
import { removeFavorite } from '../../reducers/ascFavoritesReducer'
import { IconAssociation } from '../iconos/IconAssociation'
import { IconTrash } from '../iconos/IconTrash'

export const SubmenuFavorite = ({ aid }) => {

    const { handleRemoveFavorite } = useToggleFavorite({ aid });
    return (
        <ul className="__modal_submenu_event animate__animated animate__fadeIn">
                <li>
                    <button className = "__btn">
                        <IconAssociation />
                        <p>Visitar asociación</p>
                    </button>
                </li>
                <li>
                    <button 
                        onClick = { handleRemoveFavorite }
                        className = "__btn">
                            <IconTrash />
                            <p>Eliminar de mis favoritos</p>
                    </button>
                </li>
            </ul>
    )
}
