import React from 'react'
import { WrapperDetails } from '../configUser/WrapperDetails'

export const ItemInformationEvent = ({ title, content, Icon }) => {
    return (
        <>
            <WrapperDetails title={ title} Icon = { Icon }>
                <p>{ content }</p>
            </WrapperDetails>
            <p>{ content }</p>
        </>
    )
}
