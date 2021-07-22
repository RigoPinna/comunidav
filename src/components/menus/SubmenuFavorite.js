import React from 'react'
import { IconAssociation } from '../iconos/IconAssociation'
import { IconTrash } from '../iconos/IconTrash'

export const SubmenuFavorite = () => {
    return (
        <ul className="__modal_submenu_event animate__animated animate__fadeIn">
                <li>
                    <button className = "__btn">
                        <IconAssociation />
                        <p>Visitar asociación</p>
                    </button>
                </li>
                <li>
                    <button className = "__btn">
                        <IconTrash />
                        <p>Eliminar de mis favoritos</p>
                    </button>
                </li>
            </ul>
    )
}
