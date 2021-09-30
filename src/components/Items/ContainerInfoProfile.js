import React, { useRef } from 'react'
import { useGetPalleterColorImg } from '../../hooks/useGetPalleterColorImg';
import { AvatarAssociation } from '../favoriteAsc/AvatarAssociation';
import { ItemAssociation } from '../favoriteAsc/ItemAssociation';
import { IconDescription } from '../iconos/IconDescription';
import { SubMenuPublicProfile } from '../menus/SubMenuPublicProfile';
import { ButtonFavorite } from '../profile/ButtonFavorite';
import { BadgeShort } from './BadgeShort'


export const ContainerInfoProfile = ( dataUser ) => {
    const typeUserNameLong = dataUser.typeUser === 'ASC' ? 'Asociación' : 'Voluntario';
    return (
        <div className = "__wrapper_info  animate__animated animate__fadeIn">
           <ItemAssociation { ...dataUser} isProfile={ true }/>
            {
               !dataUser.isMyProfile && +dataUser.viewUbication != 0 && <SubMenuPublicProfile options={ dataUser.options } setOptions={ dataUser.setOptions }  lat={ dataUser.lat } lng = { dataUser.lng }/>
            } 
        </div>
    )
}
