import React, { useRef } from 'react'
import { useGetPalleterColorImg } from '../../hooks/useGetPalleterColorImg';
import { IconDescription } from '../iconos/IconDescription';
import { ButtonFavorite } from '../profile/ButtonFavorite';
import { BadgeShort } from './BadgeShort'


export const ContainerInfoProfile = ({ aid, displayName, typeUser, category, description, image, isMyProfile }) => {
    const typeUserNameLong = typeUser === 'ASC' ? 'Asociación' : 'Voluntario';
    const canvasRef = useRef( null )
    const img = useRef( null )
    const  [ palleteColors ] = useGetPalleterColorImg( img.current, canvasRef );
    return (
        <div className = "__wrapper_info  animate__animated animate__fadeIn">
            <span style = {{background: palleteColors[0] }}></span>
            { !isMyProfile && <ButtonFavorite aid = {aid} displayName = {displayName} category = { category } image = { image } description = { description }/> }

            <div className="__wrapper_info_header">
                <canvas ref={canvasRef} style={{display: 'none'}}/>
                <img ref={img} src={image} crossOrigin="anonymous" alt={displayName}/>
                    <h2>{ displayName }</h2>
                    <div>
                        <BadgeShort typeUser = { typeUser } text = { typeUserNameLong } color = { typeUser }/>
                        { 
                            ( !!category )
                            && <BadgeShort color = { category } text = {`Categoria • ${ category }`}/>
                        }
                    </div>
                    {/* <strong>9 eventos creados</strong> */}
                <div className="__wrapper_info_description">
                    <IconDescription />
                        <p >{ !!description ? description : 'Esta asociación no tiene descripción...' }</p>
                </div>
            </div>
        </div>
    )
}
