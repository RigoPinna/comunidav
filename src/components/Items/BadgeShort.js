import React from 'react'
import { BADGE_COLORS } from '../../helpers/BADGE_COLORS';

export const BadgeShort = ( { typeUser = 'ASC', color = 'ASC', text = '' } ) => {
    const colorBadge = BADGE_COLORS[color] || BADGE_COLORS['ASC']; 
    return (
        <span 
            className = {
               ( typeUser === 'ASC' )
                    ? `badge_short ${colorBadge}`
                    : `badge_short ${colorBadge}`
                    }
            >
            <p>{ text }</p>
        </span>
    )
}
