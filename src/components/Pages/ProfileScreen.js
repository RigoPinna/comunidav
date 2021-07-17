import React from 'react'
import { useGetInfoUserLoged } from '../../hooks/useGetInfoUserLoged';

import { ContainerInfoProfile } from '../Items/ContainerInfoProfile'
import { DoPublicationHeader } from '../Items/DoPublicationHeader'
import { SubMenuProfileAsc } from '../menus/SubMenuProfileAsc';

export const ProfileScreen = () => {

    const [ userDateLoger ] = useGetInfoUserLoged();

    return (
        <section>
            <h1>Mi perfil</h1>
            <ContainerInfoProfile {...userDateLoger}/>
            <DoPublicationHeader 
                displayName={userDateLoger.displayName} 
                textSecondary = {userDateLoger.userName} 
                image = {userDateLoger.image} 
            />
            <SubMenuProfileAsc />
        </section>
    )
}
