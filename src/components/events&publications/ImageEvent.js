import React from 'react'
import { ButtonZoomImage } from './ButtonZoomImage';

export const ImageEvent = React.memo(( { image, title, zoomButton= true, ButtonExtra = undefined } ) => {


    return (
        <div className = '__wrapper_image_event animate__animated animate__fadeIn'>
             <img src = { image } alt="Evento"/>
             <div className = '__wrapper_image_event_list_buttons'>
                {
                    zoomButton && <ButtonZoomImage image={image} title = { title } />

                }
                {
                    ButtonExtra && <ButtonExtra />
                }
             </div>
            
        </div>
    )
})
