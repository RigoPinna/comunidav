import React from 'react'
import { useTimeAgo } from '../../hooks/useTimeAgo'
import { Avatar } from '../Items/Avatar'

export const MessageRecibed = ({image, text="", displayName, createdat }) => {
    const time = useTimeAgo( createdat, "short" )
    return (
        <div className="__message_recibed">
            <Avatar image={image} name={ displayName } />
            <div className="__message">
                <span>{ displayName }</span>
                <p>{ text } <sub>{ time }</sub></p>
            </div>
        </div>
    )
}
