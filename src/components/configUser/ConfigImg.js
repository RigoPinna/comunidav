import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REGEX_INPUT_VALUES } from '../../helpers/REGULAR_EXPRESSIONS'
import { updateAvatar } from '../../reducers/authReducer'
import { IconCamera } from '../iconos/IconCamera'
import { IconCheck } from '../iconos/IconCheck'

export const ConfigImg = ({ imageOld }) => {
    const dispatch = useDispatch();
    const { uid, displayName } = useSelector(state => state.userLogedReducer)
    const [ image, setImage ] = useState( imageOld )
    const [ file, setFile ] = useState( null );
    const { image: imgRegex } = REGEX_INPUT_VALUES;

    useEffect(() => {
        if ( !!file ) {
            const imageURL = URL.createObjectURL( file );
            setImage ( imageURL)
        }
        
    }, [ file ]);

    const inputFile = useRef( null );

    const handleClick = ( evt ) => {
        evt.preventDefault();
        inputFile.current.click();

    }
    const handleChangeImage = ( ) => {
        const files = inputFile.current.files;
        if ( files.length > 0) {
            if(imgRegex.test( files[0] )) {
                setFile( files[0] );
                return ;
            }
        }
    }
    const handleUpdateImage = ( evt ) => {
        evt.preventDefault();
        dispatch( updateAvatar({ image, file, displayName, uid }) );
    }
    return (
        <>
            <div>
                <div>
                    <img src = { image } alt = { displayName }/>
                    <button onClick = { handleClick } className="__btn_camera"><IconCamera /></button>
                </div>
                <input onChange = { handleChangeImage } ref ={ inputFile } type ={'file'} />
            </div>
                {
                    image !== imageOld
                        && <button onClick={handleUpdateImage} className="__btn animate__animated animate__bounce animate__fadeIn">
                            <IconCheck />
                            <p>Guardar</p></button>
                }
        </>
    )
}
