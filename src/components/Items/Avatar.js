import React from 'react'
import avatarImg from '../../assets/icons/avatar.jpg';

export const Avatar = ( { image = avatarImg, name } ) => {
    return (
            <img className = '__itme_avatar' src = { image } alt = {name} />
    )
}
