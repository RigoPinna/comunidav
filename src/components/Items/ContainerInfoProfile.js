import React from 'react'
import { ItemAssociation } from '../favoriteAsc/ItemAssociation';

import { SubMenuPublicProfile } from '../menus/SubMenuPublicProfile';



export const ContainerInfoProfile = ( dataUser ) => {
    const typeUserNameLong = dataUser.typeUser === 'ASC' ? 'Asociación' : 'Voluntario';
    return (
        <div className = "__wrapper_info  animate__animated animate__fadeIn">
           <ItemAssociation 
                { ...dataUser } 
                isProfile = { true } 
                viewButtonBack = { dataUser.viewButtonBack } 
                />
            {
               (!dataUser.isMyProfile && +dataUser.viewUbication != 0) && <SubMenuPublicProfile options={ dataUser.options } setOptions={ dataUser.setOptions }  lat={ dataUser.lat } lng = { dataUser.lng }/>
            } 
        </div>
    )
}
