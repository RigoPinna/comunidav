import React from 'react'
import { IconGroups } from '../iconos/IconGroups'
import { IconListParticipants } from '../iconos/IconListParticipants'
import { IconTrash } from '../iconos/IconTrash'
import { useActionsEvents } from '../../hooks/useActionsEvents';
export const ContentMenuIsMyEvent = ({ nameEvent, participants, eid }) => {

    const { hanldeViewList, hanldeGoToEvent, hanldeDeleteEvent } = useActionsEvents({ participants, eid });
    
    
    return (
        <ul className="__modal_submenu_event animate__animated animate__fadeIn animate__faster">
                <li>
                    <button className = "__btn" onClick = { hanldeGoToEvent}>
                        <IconGroups />
                        <p>Visitar grupo</p>
                    </button>
                </li>
                <li>
                    <button className = "__btn" onClick={ hanldeViewList }>
                        <IconListParticipants />
                        <p>Lista de participantes</p>
                    </button>
                </li>
                <li>
                    <button className = "__btn" onClick={ hanldeDeleteEvent }>
                        <IconTrash />
                        <p>Eliminar evento</p>
                    </button>
                </li>
        </ul>
    )
}
