import React, { useRef } from 'react'
import { useEffect } from 'react';
import { OPTION_SUBMEN_USER } from '../../helpers/OPTION_SUBMENU_USER';
import { useActiveSubmenuOption } from '../../hooks/useActiveSubmenuOption';
import { IconEvent } from '../iconos/IconEvent';
import { IconFavorite } from '../iconos/IconFavorite';
import { IconGroups } from '../iconos/IconGroups';

export const SubMenuUser = ({ setViewOption, typeUser }) => {

    const [ setActiveOption ] = useActiveSubmenuOption();
    const opMyEvents = useRef( null );
    const opMyFavorites = useRef( null );
    const opMyGroups = useRef( null );

    
    const hanldeActionMenu = ( optiontype ) => {
        
        const arrayOptions = (typeUser === 'ASC') 
                                ? [ opMyEvents.current, opMyFavorites.current, opMyGroups.current]
                                : [ opMyFavorites.current, opMyGroups.current ]
        switch ( optiontype ) {
            case OPTION_SUBMEN_USER.viewMyEvents:
                setViewOption( OPTION_SUBMEN_USER.viewMyEvents )
                setActiveOption( arrayOptions, opMyEvents.current )
                
                break;
            case OPTION_SUBMEN_USER.viewMyFav:
                setViewOption( OPTION_SUBMEN_USER.viewMyFav )
                setActiveOption( arrayOptions, opMyFavorites.current )
                
                break;
            case OPTION_SUBMEN_USER.viewMyGroups:
                setViewOption( OPTION_SUBMEN_USER.viewMyGroups)
                setActiveOption( arrayOptions, opMyGroups.current )
                break;
            default:
                console.log('default',optiontype)
                break;
        }

    }
    return (
        <div className ="__submenu  animate__animated animate__fadeIn">
            { 
                typeUser === 'ASC'
                    && <button 
                    id="op-events" 
                    onClick= { () => { hanldeActionMenu( OPTION_SUBMEN_USER.viewMyEvents ) } } 
                    ref = { opMyEvents } 
                    className= "__btn __submenu_option_active">
                       <IconEvent />
                        <p>Mis eventos</p>
                </button> 
            }
            <button 
                id="op-group" 
                onClick= { () => { hanldeActionMenu( OPTION_SUBMEN_USER.viewMyGroups ) } }  
                ref={ opMyGroups } 
                className= { typeUser === 'VOL' ? '__btn __submenu_option_active' : '__btn'}>
                   <IconGroups />
                    <p>Mis grupos</p>
            </button>
            <button 
                id="op-fav" 
                onClick= { () => { hanldeActionMenu( OPTION_SUBMEN_USER.viewMyFav ) } }  
                ref={ opMyFavorites } 
                className= "__btn">
                    <IconFavorite />
                    <p>Mis favoritos</p>
            </button>
        </div>
    )
}
