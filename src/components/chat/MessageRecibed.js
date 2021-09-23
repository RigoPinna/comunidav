import React from 'react'
import { Avatar } from '../Items/Avatar'

export const MessageRecibed = ({image, text="", displayName }) => {
    return (
        <div className="__message_recibed">
            <Avatar image={image} name={ displayName } />
            <div className="__message">
                <span>{ displayName }</span>
                <p>{ text }</p>
            </div>
        </div>
    )
}
