import React from 'react'
import { Avatar } from './Avatar'
import { ItemUser } from './ItemUser'

export const HoverContentItemAscFromRegion = ({ascName, image, category, description }) => {
    return (
        <>
            <div className="__item_tootTip_asc_from_region_header">
                <Avatar image={image}/>
                <div>
                    <strong>{ ascName } </strong>
                </div>

            </div>
                <p>{ description }</p>
        </>
    )
}
