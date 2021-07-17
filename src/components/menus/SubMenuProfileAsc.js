import React, { useRef } from 'react'
import { useActiveSubmenuOption } from '../../hooks/useActiveSubmenuOption';

export const SubMenuProfileAsc = () => {
    const [ setActiveOption ] = useActiveSubmenuOption();
    const opMyEvents = useRef(null);
    const opMyFavorites = useRef(null);
    const opMyGroups = useRef(null);
    const OPTIOS_TYPE = {
        getMyEvents: 'events',
        getMyFavorites: 'favorites',
        getMyGroups: 'groups',
    }

    const hanldeActionMenu = ( optuonType ) => {
        const arrayOptions = [ opMyEvents.current, opMyFavorites.current, opMyGroups.current]
        switch ( optuonType ) {
            case OPTIOS_TYPE.getMyEvents:
               
                setActiveOption( arrayOptions, opMyEvents.current )
                
                break;
            case OPTIOS_TYPE.getMyFavorites:
                setActiveOption( arrayOptions, opMyFavorites.current )
                
                break;
            case OPTIOS_TYPE.getMyGroups:
                setActiveOption( arrayOptions, opMyGroups.current )
                
                break;
        
            default:
                break;
        }

    }
    return (
        <div className ="__submenu">
            <button 
                id="op-events" 
                onClick= { () => { hanldeActionMenu( OPTIOS_TYPE.getMyEvents ) } } 
                ref = { opMyEvents } 
                className= "__btn">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
                    <p>Mis eventos</p>
            </button>
            <button 
                id="op-group" 
                onClick= { () => { hanldeActionMenu( OPTIOS_TYPE.getMyGroups ) } }  
                ref={ opMyGroups } 
                className= "__btn">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    <p>Grupos</p>
            </button>
            <button 
                id="op-fav" 
                onClick= { () => { hanldeActionMenu( OPTIOS_TYPE.getMyFavorites ) } }  
                ref={ opMyFavorites } 
                className= "__btn">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                <p>Mis favoritos</p>
            </button>
            
        </div>
    )
}
