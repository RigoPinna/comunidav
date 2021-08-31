import React, { useRef } from 'react'
import { IconImage } from '../iconos/IconImage'
import ReactTooltip from 'react-tooltip';
export const ButtonUploadImage = ({ setFile }) => {
    const inputFile = useRef( null );
    const handleChangeImage = ( ) => {
        const files = inputFile.current.files;
        if ( files.length > 0) {
            setFile( files[0])
        }
    }
    const handleClick = ( evt ) => {
        evt.preventDefault();
        inputFile.current.click();

    }
    return (
        <>
            <button
                onClick = { handleClick } 
                data-for = "btn-image"  
                data-tip = "Subir imagen"
                className="__btn __btn_image">
                <IconImage />
            </button>
            <input ref = { inputFile } style={{display: "none"}} onChange={ handleChangeImage } name="image" type="file" />
            <ReactTooltip  id='btn-image' type="dark" effect='solid'/>
        </>
    )
}
