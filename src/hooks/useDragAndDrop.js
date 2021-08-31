import { useEffect, useState } from 'react'
const DRAG_IMAGE_STATE = {
    error: -1,
    none: 0,
    drag_over:1,
    uploading:2,
    complete: 3,
}
const STYLE_DRAG_OVER = { 
    border:`2px solid #77A7FF`,
    background:'rgba(117, 165, 255, 0.3)',
    borderStyle: 'dashed',
    color:'#FFF'
}
export const useDragAndDrop = () => {

    const [ drag, setDrag ] = useState( DRAG_IMAGE_STATE.none )
    const [ file, setFile ] = useState( null )
    const [ imgURL , setImgURL ] = useState( null )
    useEffect(() => {
        if ( file ) {
            setImgURL( URL.createObjectURL( file ) )
        }
    }, [ file ])
    const hanldeDragEnter = ( evt ) => {
        evt.preventDefault();
        setDrag( DRAG_IMAGE_STATE.drag_over )
        
    }
    const hanldeDragLeave = ( evt ) => {
        evt.preventDefault();
        setDrag( DRAG_IMAGE_STATE.none )
    }
    const hanldeDrop = ( evt ) => {
        evt.preventDefault();
        setDrag( DRAG_IMAGE_STATE.none )
        setFile( evt.dataTransfer.files[0] )
       
    }
    return [ imgURL, file,setFile, setImgURL,drag, hanldeDragEnter, hanldeDragLeave, hanldeDrop, STYLE_DRAG_OVER, DRAG_IMAGE_STATE ]
}
