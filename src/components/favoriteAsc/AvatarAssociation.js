import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { useGetPalleterColorImg } from '../../hooks/useGetPalleterColorImg';
import { BadgeShort } from '../Items/BadgeShort'
import { ButtonFavorite } from '../profile/ButtonFavorite';
import { HeaderColorItemAsc } from './HeaderColorItemAsc'

export const AvatarAssociation = ( dataAsc ) => {
    const { uid } = useSelector(state => state.userLogedReducer)
    const canvasRef = useRef( null );
    const img = useRef( null );
    const  [ palleteColors ] = useGetPalleterColorImg( img.current, canvasRef );
    return (
        <>
            <HeaderColorItemAsc color={palleteColors[0]} />
            <div className ="__wrapper_avatar">
                <img ref={img} src={ dataAsc.image } alt={ dataAsc.displayName } crossOrigin="anonymous" />
                <BadgeShort color={ dataAsc.category } text={ dataAsc.category } />
                <canvas ref={canvasRef} style={{display: 'none'}}/>
            </div>
            {
                !(+dataAsc.uid === +uid) && <ButtonFavorite {...dataAsc }/>
            }
        </>
    )
}
