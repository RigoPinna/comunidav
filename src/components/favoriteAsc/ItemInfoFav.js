import React from 'react'

export const ItemInfoFav = ({ info, Icon, colorIcon = 'black' }) => {
    return (
        <span className = "__text_with_icon">
            <Icon color = { colorIcon }/>
            {
                ( !!info ) 
                 ? <p>{info}</p>
                 :<p>No hay información de esta asociación</p>
            }
        </span>
    )
}
