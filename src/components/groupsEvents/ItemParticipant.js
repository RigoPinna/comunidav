import React from 'react'
import { Avatar } from '../Items/Avatar'

export const ItemParticipant = React.memo(({ image, displayName}) => {
    return (
        <div data-for={'prt'} data-tip={ displayName }>
            <Avatar 
                image = { image } 
                name = { displayName } 
            />
        </div>
    )
})
