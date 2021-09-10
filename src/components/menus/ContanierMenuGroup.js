import React from 'react'
import { IconGroups } from '../iconos/IconGroups'
import { IconTrash } from '../iconos/IconTrash'
import { useActionsEvents } from '../../hooks/useActionsEvents'
export const ContanierMenuGroup = ({ isCreator, eid }) => {
    const { hanldeDeleteEvent } = useActionsEvents({ eid });
    return (
        <ul className="__modal_submenu_event animate__animated animate__fadeIn animate__faster">
            {
                isCreator
                    ?   <li>
                            <button className = "__btn" onClick = { hanldeDeleteEvent}>
                                <IconTrash />
                                <p>Eliminar evento</p>
                            </button>
                        </li>  
                    :  <li>
                            <button className = "__btn">
                                <IconGroups />
                                <p>Salir de este grupo</p>
                            </button>
                        </li> 
            }        
    </ul>   
    )
}
