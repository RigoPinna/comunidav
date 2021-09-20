import React from 'react'
import { IconEvent } from '../iconos/IconEvent'
import { IconMap } from '../iconos/IconMap'
import { InputRadioSecondary } from '../Inputs/InputRadioSecondary'

export const SubMenuPublicProfile = ({ options, setOptions, lat, lng }) => {
   
    const handdleInputChange = ({ target })=> {
        switch ( target.getAttribute('id') ) {
            case 'events':
                setOptions({ events:true, ubication:false });
                break;
            case 'ubication':
                setOptions({ events:false, ubication:true });
                break;
        
            default:
                break;
        }
    }
    return (
        <div className="__wrapper_submenu_public_profile">
            <InputRadioSecondary
                checked = { options.events}
                onClick = { handdleInputChange } 
                text="Eventos" 
                id="events" 
                name="opt" 
                Icon ={ IconEvent }/>
            <InputRadioSecondary
                checked = { options.ubication}
                onClick = { handdleInputChange } 
                text="Ubicación" 
                id="ubication" 
                name="opt" 
                Icon ={ IconMap }/>
        </div>  
    )
}
