import React from 'react'
import { useDispatch } from 'react-redux'
import { openModalImage } from '../../reducers/uiReducer';

export const ImageEvent = ( { image }) => {

    const dispatch = useDispatch();

    const handleViewImage = () => {
        dispatch( openModalImage( image ) )
    }

    return (
        <div className = '__wrapper_image_event'>
             <img src = { image } alt="Evento"/>
             <button onClick = { handleViewImage } className = '__btn_view_image bg_blur_effect_black'>
                <svg 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" 
                        />
                </svg>
             </button>
        </div>
    )
}
