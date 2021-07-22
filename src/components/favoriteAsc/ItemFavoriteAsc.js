import React from 'react'
import { ItemUser } from '../Items/ItemUser'
import { ButtonMenuFavorite } from '../menus/ButtonMenuFavorite'

export const ItemFavoriteAsc = ({ idFavorite, displayName, image,category, description }) => {
    return (
        
        <div className = "__wrapper_publication_and_event animate__animated animate__fadeIn">
            <ButtonMenuFavorite fid = {idFavorite} />
            <div className = "__wrapper_publication_and_event_header">
                <ItemUser 
                    typeUser = {'ASC'} 
                    displayName = { displayName }
                    image = { image }
                    textSecondary = {`Categoria • ${ category }`}
                />
            </div>
            <div className = "__wrapper_publication_and_event_body">
                <p>{!!description ? description : 'Esta asociación no tiene descripción.' }</p>
            </div>
        </div>
    )
}
