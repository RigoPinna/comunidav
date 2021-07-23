import React, { useEffect } from 'react'
import { Avatar } from './Avatar'
import { BadgeShort } from './BadgeShort'

export const ContainerInfoProfile = ({ userName, displayName, typeUser, category, description, image }) => {
    const typeUserNameLong = typeUser === 'ASC' ? 'Asociación' : 'Voluntario';
    useEffect(() => {
    }, [])
    return (
        <div className = "__wrapper_info  animate__animated animate__fadeIn">
                <div className="__wrapper_info_header">
                    <Avatar image = { image } name = { displayName } /> 
                    <div className="__wrapper_info_header_text">
                        <h2>{ displayName }</h2>
                        <BadgeShort typeUser = { typeUser } text = { typeUserNameLong }/>
                        { 
                            ( !!category )
                                && <BadgeShort color = { category } text = {`Categoria ${ category }`}/>
                        }
                    </div> 
                </div>
                    <div>
                        <strong>{userName}</strong>
                        <p>{ !!description ? description : '' }</p>
                    </div>
            </div>
    )
}
