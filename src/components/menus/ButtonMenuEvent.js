import React from 'react'
import { useViewSubMenu } from '../../hooks/useViewSubMenu';
import { SubMenuEventCreated } from './SubMenuEventCreated'

export const ButtonubMenuEvent = React.memo(({ eid, uidCreator, uidLoged, isTheCreator }) => {
    
    const [ viewMenuIsActive, handleViewMenu ] = useViewSubMenu();
    
    return (
        <>
            <button onClick={ handleViewMenu } className = "__btn __btn_menu_publication">
                <svg 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    >
                        <path strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" 
                        />
                </svg>
            </button>
            { 
                viewMenuIsActive 
                    && <SubMenuEventCreated 
                            eid = { eid }
                            uidCreator = { uidCreator }
                            uidLoged = { uidLoged }
                            isTheCreator = { isTheCreator } 
                        /> 
            }
        </>
    )
});
