import React from 'react'
import { IconDescription } from '../iconos/IconDescription'
import { IconLocation } from '../iconos/IconLocation'
import { Avatar } from './Avatar'
import { ItemUser } from './ItemUser'

export const HoverContentItemAscFromRegion = ({ascName, image, category, description,nameMun,nameEstado,land, landName  }) => {
    return (
        <>
            <div className="__item_tootTip_asc_from_region_header">
                <Avatar image={image}/>
                <div>
                    <strong>{ ascName } </strong>
                    <div>
                        <IconLocation />
                        <p>{`${nameMun}, ${nameEstado} `}</p>
                        <img src={land} alt={landName}/>

                    </div>
                    <div>
                        <IconDescription />
                        <p>{ description === "" ? "Esta asociación no tiene descripción": description }</p>
                    </div>
                </div>

            </div>
        </>
    )
}
