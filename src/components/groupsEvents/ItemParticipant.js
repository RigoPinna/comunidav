import React from 'react'
import { Avatar } from '../Items/Avatar'

export const ItemParticipant = ({ nameAsc, name, lastName, image, displayName}) => {
    return (
        <div data-for={'prt'} data-tip={!!nameAsc ? nameAsc : `${ name } ${ lastName }`}>
            <Avatar 
                image = { image } 
                name = { displayName } 
            />
        </div>
    )
}
