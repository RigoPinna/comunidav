import React, { useEffect, useState } from 'react'
import { useViewSubMenu } from '../../hooks/useViewSubMenu';
import { IconMenu } from '../iconos/IconMenu'
import { ContanierMenuGroup } from './ContanierMenuGroup';

export const ButtonMenuGroup = React.memo(({ creator, uid, eid }) => {
    const [ viewMenuIsActive, handleViewMenu ] = useViewSubMenu();
    const [ isCreator, setIsCreator ] = useState( false );
    useEffect(() => {
        console.log( creator.uid, uid,+creator.uid === +uid );
        setIsCreator(+creator.uid === +uid );
        
    }, [ creator, uid ])
    return (
        <>
        <button 
            onClick={ handleViewMenu } 
            style ={{background: viewMenuIsActive ? "#F2F2F2" : "#FFF"}} className = "__btn __btn_menu_publication"
            >
                <IconMenu />
        </button>
            {
                viewMenuIsActive && <ContanierMenuGroup isCreator = { isCreator } eid = { eid }/>
            }
        </>
    )
})
