import React, { useRef } from 'react'
import { useActiveSubmenuOption } from '../../hooks/useActiveSubmenuOption';
import { IconEvent } from '../iconos/IconEvent';
import { IconFavorite } from '../iconos/IconFavorite';
import { IconGroups } from '../iconos/IconGroups';
const OPTION_MENU = {
    viewMyEvents: 1,
    viewMyGroups: 2,
    viewMyFav: 3,
}
export const SubMenuProfileAsc = ({ setViewOption }) => {
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
                setViewOption( OPTION_MENU.viewMyEvents )
                setActiveOption( arrayOptions, opMyEvents.current )
                
                break;
            case OPTIOS_TYPE.getMyFavorites:
                setViewOption( OPTION_MENU.viewMyFav )
                setActiveOption( arrayOptions, opMyFavorites.current )
                
                break;
            case OPTIOS_TYPE.getMyGroups:
                setViewOption( OPTION_MENU.viewMyGroups )
                setActiveOption( arrayOptions, opMyGroups.current )
                
                break;
        
            default:
                break;
        }

    }
    return (
        <div className ="__submenu  animate__animated animate__fadeIn">
            <button 
                id="op-events" 
                onClick= { () => { hanldeActionMenu( OPTIOS_TYPE.getMyEvents ) } } 
                ref = { opMyEvents } 
                className= "__btn __submenu_option_active">
                   <IconEvent />
                    <p>Mis eventos</p>
            </button>
            <button 
                id="op-group" 
                onClick= { () => { hanldeActionMenu( OPTIOS_TYPE.getMyGroups ) } }  
                ref={ opMyGroups } 
                className= "__btn">
                   <IconGroups />
                    <p>Grupos creados</p>
            </button>
            <button 
                id="op-fav" 
                onClick= { () => { hanldeActionMenu( OPTIOS_TYPE.getMyFavorites ) } }  
                ref={ opMyFavorites } 
                className= "__btn">
                    <IconFavorite />
                    <p>Mis favoritos</p>
            </button>
            
        </div>
    )
}
