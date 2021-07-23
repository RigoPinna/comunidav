import React from 'react'
import { useDispatch } from 'react-redux'
import { useIsMounted } from '../../hooks/useIsMounted'
import { removeFavorite } from '../../reducers/ascFavoritesReducer'
import { IconAssociation } from '../iconos/IconAssociation'
import { IconTrash } from '../iconos/IconTrash'

export const SubmenuFavorite = ({ aid }) => {

    const dispatch = useDispatch();
    const [ isMounted ] = useIsMounted();
    const handleDeleteFavorite = () => {
        isMounted && dispatch( removeFavorite( aid ) );
    }
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
                        onClick = { handleDeleteFavorite }
                        className = "__btn">
                            <IconTrash />
                            <p>Eliminar de mis favoritos</p>
                    </button>
                </li>
            </ul>
    )
}
