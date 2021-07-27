import React from 'react'
import { IconExclamin } from '../iconos/IconExclamin'

export const MessageErrorInput = ({ messageError }) => {
    return (
        <div className = '__messages_error'>
            <IconExclamin />
            <p>{ messageError }</p>
            
        </div>
    )
}
