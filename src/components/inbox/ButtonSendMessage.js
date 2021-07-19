import React from 'react'
import { IconSendMessage } from '../iconos/IconSendMessage'

export const ButtonSendMessage = ( {text = ''}) => {
    return (
        <button className = "__btn">
          <IconSendMessage text = { text }></IconSendMessage>
            
        </button>
    )
}