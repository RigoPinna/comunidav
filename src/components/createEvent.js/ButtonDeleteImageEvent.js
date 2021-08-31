import React from 'react'
import ReactTooltip from 'react-tooltip'
import { IconX } from '../iconos/IconX';

export const ButtonDeleteImageEvent = ({ setImgURL, setFile }) => {
    const hanldeRemoveImage = e => {
        e.preventDefault();
        setImgURL( null );
        setFile( null )
    }
    return (
        <>
            <button
                id = 'delete'
                data-for = "btn-delete"  
                data-tip = "Remover imagen"
                onClick={ hanldeRemoveImage } 
                className = "bg_blur_effect_black">
                 <IconX />
            </button>
            <ReactTooltip  id='btn-delete' type="dark" effect='solid'/>
         </>
    )
}
