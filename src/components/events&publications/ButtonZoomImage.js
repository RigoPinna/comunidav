import React from 'react'
import { useDispatch } from 'react-redux';
import { openModalImage } from '../../reducers/uiReducer';
import ReactTooltip from 'react-tooltip';
import { IconZoomImage } from '../iconos/IconZoomImage';

export const ButtonZoomImage = ({ image, title }) => {
    
    const dispatch = useDispatch();

    const handleViewImage = ( evt ) => {
        evt.preventDefault();
        dispatch( openModalImage( image, title ) )
    }
    return (
        <>
            <button  
                data-for = "btn-zoom"  
                data-tip = "Ver más" 
                onClick = { handleViewImage } 
                className = 'bg_blur_effect_black'>
                    <IconZoomImage />
            </button>
            <ReactTooltip  id='btn-zoom' type="dark" effect='solid'/>
        </>
    )
}
