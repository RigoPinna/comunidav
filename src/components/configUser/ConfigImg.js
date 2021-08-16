import React, { useState } from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { updateAvatar } from '../../reducers/authReducer'
import { IconCamera } from '../iconos/IconCamera'
import { IconCheck } from '../iconos/IconCheck'

export const ConfigImg = ({ imageOld, displayName }) => {
    const dispatch = useDispatch();
    const [image, setimage] = useState( imageOld )
    const inputFile = useRef( null );
    const handleClick = ( evt ) => {
        evt.preventDefault();
        inputFile.current.click();

    }
    const handleChangeImage = ( ) => {
        const files = inputFile.current.files;
        if ( files.length > 0) {
            const imageURL = URL.createObjectURL( files[0] );
            setimage ( imageURL)
        }
    }
    const handleUpdateImage = ( evt ) => {
        evt.preventDefault();
        dispatch( updateAvatar( image ) );
    }
    return (
        <div>
             <div>
             <img src = { image } alt = { displayName }/>
             <button onClick = { handleClick } className="__btn_camera"><IconCamera /></button>
             </div>
             <input onChange = { handleChangeImage }ref ={ inputFile } type ={'file'} />
             {
                 image !== imageOld
                    && <button onClick={handleUpdateImage} className="__btn animate__animated animate__bounce animate__fadeIn">
                        <IconCheck />
                        <p>Guardar</p></button>
             }
        </div>
    )
}
