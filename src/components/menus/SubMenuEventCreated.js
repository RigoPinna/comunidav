import React from 'react'
import { IconAssociation } from '../iconos/IconAssociation'
import { IconFavorite } from '../iconos/IconFavorite'
import { IconGroups } from '../iconos/IconGroups'
import { IconListParticipants } from '../iconos/IconListParticipants'
import { IconTrash } from '../iconos/IconTrash'

export const SubMenuEventCreated = ({ eid, uidCreator, uidLoged, isTheCreator }) => {
    if( isTheCreator ) {
        return (
            <ul className="__modal_submenu_event animate__animated animate__fadeIn">
                <li>
                    <button className = "__btn">
                        <IconGroups />
                        <p>Visitar grupo</p>
                    </button>
                </li>
                <li>
                    <button className = "__btn">
                        <IconListParticipants />
                        <p>Lista de participantes</p>
                    </button>
                </li>
                <li>
                    <button className = "__btn">
                        <IconTrash />
                        <p>Eliminar evento</p>
                    </button>
                </li>
            </ul>

        )
    }
    return (
        <ul className="__modal_submenu_event animate__animated animate__fadeIn">
           <li>
                <button className = "__btn">
                    <IconFavorite />
                    <p>Agregar a favoritos</p>
                </button>
            </li>
            <li>
                <button className = "__btn">
                    <IconAssociation />
                    <p>Visitar asociación</p>
                </button>
            </li>
            <li>
                <button className = "__btn">
                    <IconGroups />
                    <p>Visitar grupo</p>
                </button>
            </li>
           
            
        </ul>
    )
}
