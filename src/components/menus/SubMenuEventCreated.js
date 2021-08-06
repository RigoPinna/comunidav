import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIsMounted } from '../../hooks/useIsMounted'
import { addToFavorites, removeFavorite } from '../../reducers/ascFavoritesReducer'
import { IconAssociation } from '../iconos/IconAssociation'
import { IconFavorite } from '../iconos/IconFavorite'
import { IconGroups } from '../iconos/IconGroups'
import { IconListParticipants } from '../iconos/IconListParticipants'
import { IconTrash } from '../iconos/IconTrash'

export const SubMenuEventCreated = ({ eid,uidLoged, isTheCreator, dataCreator }) => {
    const [ isMounted ] = useIsMounted();
    const dispatch = useDispatch();
    const { userLogedReducer, favoritesReducer } = useSelector( state => state );
    const { uid } = userLogedReducer;
    const isFavorite = favoritesReducer.some( itemFav => itemFav.idAsociacion == dataCreator.aid );
    const [ state, setstate ] = useState( isFavorite )
    const handleAddToFavorite = () => {
        isMounted && dispatch( addToFavorites( dataCreator ) );
        setstate( true );
        
    }
    const handleRemoveFavorite = () => {
        isMounted && dispatch( removeFavorite( dataCreator.aid ) );
        setstate( false );
        
    }
    const hanldeToggleActionButton = () => {
        ( state ) 
            ? handleRemoveFavorite()
            : handleAddToFavorite()

    }
    if( isTheCreator ) {
        return (
            <ul className="__modal_submenu_event animate__animated animate__fadeIn">
                <li>
                    <button className = "__btn">
                        <IconGroups />
                        <p>Visitar grupo</p>
                    </button>
                </li>
                <li>
                    <button className = "__btn">
                        <IconListParticipants />
                        <p>Lista de participantes</p>
                    </button>
                </li>
                <li>
                    <button className = "__btn">
                        <IconTrash />
                        <p>Eliminar evento</p>
                    </button>
                </li>
            </ul>

        )
    }
    return (
        <ul className="__modal_submenu_event animate__animated animate__fadeIn">
           <li>
                <button
                    onClick = { hanldeToggleActionButton } 
                    className = "__btn">
                        <IconFavorite />
                        <p>{ state ? "Eliminar de mis favoritos": 'Agregar a favoritos'} </p>
                </button>
            </li>
            <li>
                <button className = "__btn">
                    <IconAssociation />
                    <p>Visitar asociación</p>
                </button>
            </li>
            <li>
                <button className = "__btn">
                    <IconGroups />
                    <p>Visitar grupo</p>
                </button>
            </li>
           
            
        </ul>
    )
}
