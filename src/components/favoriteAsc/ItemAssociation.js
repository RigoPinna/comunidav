import React from 'react'
import { Link } from 'react-router-dom'
import { IconArrowRight } from '../iconos/IconArrowRight'
import { IconDescription } from '../iconos/IconDescription'
import { IconLocation } from '../iconos/IconLocation'
import { BadgeShort } from '../Items/BadgeShort'
import { ItemUser } from '../Items/ItemUser'
import { ButtonMenuFavorite } from '../menus/ButtonMenuFavorite'
import { AvatarAssociation } from './AvatarAssociation'
import { HeaderColorItemAsc } from './HeaderColorItemAsc'
import { ItemInfoFav } from './ItemInfoFav'

export const ItemAssociation = ({ idFavorite, uid, displayName, image,category, description, nameMun, abrvEstado, viewMenuFavorite=true }) => {
    const location = ( !!nameMun && !!abrvEstado ) ? `${nameMun},${abrvEstado}`: undefined;
    return (
        <div className ="__wrapper_item_asc">
            <AvatarAssociation displayName={displayName} image={ image } category={ category }/>
                <div className ="__wrapper_item_asc_body">
                    <h3>{displayName}</h3>
                    <ItemInfoFav info = { location } Icon = {IconLocation} colorIcon = {'#77A7FF'} />
                    <p>{ !!description ? description: ""}</p>
                </div>
                <div className ="__wrapper_item_asc_footer">
                    <Link className="__btn" to={`/association/${uid}`}>
                        Ver asociación
                        <IconArrowRight />
                    </Link>
                </div>
            </div>
    )
}
