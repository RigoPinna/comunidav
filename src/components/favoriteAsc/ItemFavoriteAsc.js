import React from 'react'
import { IconDescription } from '../iconos/IconDescription'
import { IconLocation } from '../iconos/IconLocation'
import { ItemUser } from '../Items/ItemUser'
import { ButtonMenuFavorite } from '../menus/ButtonMenuFavorite'
import { ItemInfoFav } from './ItemInfoFav'

export const ItemFavoriteAsc = ({ idFavorite,idAsociacion, displayName, image,category, description, nameMun, abrvEstado }) => {
    const location = ( !!nameMun && !!abrvEstado ) ? `${nameMun},${abrvEstado}`: undefined;
    console.log( idAsociacion );
    return (
        
        <div className = "__wrapper_publication_and_event animate__animated animate__fadeIn">
            <ButtonMenuFavorite aid = {idAsociacion} />
            <div className = "__wrapper_publication_and_event_header">
                <ItemUser 
                    typeUser = {'ASC'} 
                    displayName = { displayName }
                    image = { image }
                    textSecondary = {`Categoria • ${ category }`}
                />
            </div>
            <div className = "__wrapper_publication_and_event_body">
                <ItemInfoFav info = { description } Icon = {IconDescription} colorIcon = {'#FFC947'} />
                <ItemInfoFav info = { location } Icon = {IconLocation} colorIcon = {'#77A7FF'} />
                <p className = "badge_short badge_asc">9 eventos creados</p>
            </div>
        </div>
    )
}
