import React from 'react'

import { useViewSubMenu } from '../../hooks/useViewSubMenu';
import { IconMenu } from '../iconos/IconMenu';
import { SubMenuEventCreated } from './SubMenuEventCreated'

export const ButtonubMenuEvent = React.memo(({ eid, uidLoged, isTheCreator,  dataCreator, participants, nameEvent }) => {
    
    const [ viewMenuIsActive, handleViewMenu ] = useViewSubMenu();
    
    return (
        <>
            <button onClick={ handleViewMenu } style ={{background: viewMenuIsActive ? "#F2F2F2" : "#FFF"}} className = "__btn __btn_menu_publication" >
                <IconMenu />
            </button>
            { 
                viewMenuIsActive 
                    && <SubMenuEventCreated 
                            eid = { eid }
                            uidLoged = { uidLoged }
                            isTheCreator = { isTheCreator }
                            dataCreator = { dataCreator }
                            participants = { participants }
                            nameEvent = { nameEvent } 
                        /> 
            }
        </>
    )
});
