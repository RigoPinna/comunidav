import React from 'react'
import { IconArrowDown } from '../iconos/IconArrowDown'

export const WrapperDetails = ({ children, title, Icon }) => {
    return (
        <details className={'__wrapper_details'}>
            <summary>
                { ( !!Icon ) && <Icon /> }
                { title }
                <IconArrowDown />
            </summary>
            { children }
        </details>
    )
}
