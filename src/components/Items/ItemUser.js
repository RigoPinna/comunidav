import React from 'react'
import { Avatar } from './Avatar'

import { BadgeShort } from './BadgeShort'

export const ItemUser = ( { typeUser = 'ASC', displayName='name lastname ', image, textSecondary='text secondary', handle = ()=>{}} ) => {
    
    return (
        <div onClick = { handle } className = "_item">
            <Avatar 
                image = { image } 
                name = { displayName } 
            />
            <BadgeShort 
                typeUser = {typeUser} 
                text = { typeUser }
            />
            <div className = "info-Contact">
                <strong >{ displayName }</strong>
                <p>{ textSecondary }</p>
            </div>
        </div>
    )
}
