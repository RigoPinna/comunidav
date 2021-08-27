import React from 'react'
import { useState } from 'react'
const DRAG_IMAGE_STATE = {
    error: -1,
    none: 0,
    drag_over:1,
    uploading:2,
    complete: 3,
}
export const ContainerDragAndDrop = () => {
    const [drag, setDrag] = useState( DRAG_IMAGE_STATE.none )
    const [task, setTask] = useState( null );
    const [ imgURL , setImgURL ] = useState( null )

    const hanldeDragEnter = ( evt ) => {
        setDrag( DRAG_IMAGE_STATE.drag_over )
        
    }
    const hanldeDragLeave = ( evt ) => {
        setDrag( DRAG_IMAGE_STATE.none )
    }
    const hanldeDrop = ( evt ) => {
        setDrag( DRAG_IMAGE_STATE.none )

    }
    return (
        <div 
            onDragEnter = { hanldeDragEnter}
            onDragLeave = { hanldeDragLeave}
            onDrop = { hanldeDrop }
            className="__wrapper_drawAndDrop"
            style = {{border: drag === DRAG_IMAGE_STATE.drag_over ? `2px solid red` : 'none'}}
            >

            <p>{drag === DRAG_IMAGE_STATE.drag_over ? 'Suelta la imagen aqui':'Arrastra una imagen aqui'}</p>
        </div>
    )
}
