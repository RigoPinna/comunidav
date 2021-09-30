import React, { useRef } from 'react'
import { useGetPalleterColorImg } from '../../hooks/useGetPalleterColorImg';
import { BadgeShort } from '../Items/BadgeShort'
import { HeaderColorItemAsc } from './HeaderColorItemAsc'

export const AvatarAssociation = ({ image, displayName, category }) => {
    const canvasRef = useRef( null );
    const img = useRef( null );
    const  [ palleteColors ] = useGetPalleterColorImg( img.current, canvasRef );
    return (
        <>
            <HeaderColorItemAsc color={palleteColors[0]} />
            <div className ="__wrapper_avatar">
                <img ref={img} src={ image } alt={ displayName } crossOrigin="anonymous" />
                <BadgeShort color={category} text={category} />
                <canvas ref={canvasRef} style={{display: 'none'}}/>
            </div>
        </>
    )
}
