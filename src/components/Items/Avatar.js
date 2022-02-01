import React from 'react'
import { useState } from 'react';
import avatarImg from '../../assets/icons/avatar.jpg';
import { SubMenuUserLoged } from '../menus/SubMenuUserLoged';

export const Avatar = ( { image = avatarImg, name, onClick = () => { }, history } ) => {
    const [ selectItemNavBar, setSelectItemNavBar ] = useState( false )

    return (
        <>
            <img
                onClick = { ( evt, ) => { onClick( evt, selectItemNavBar, setSelectItemNavBar ) }} 
                className = { selectItemNavBar ? '__itme_avatar __active_avatar ' : '__itme_avatar' } 
                src = { image } 
                alt = {name} 
            />
            {
                selectItemNavBar && <SubMenuUserLoged setView = { setSelectItemNavBar } history = { history } />
            }
        </>
    )
}
