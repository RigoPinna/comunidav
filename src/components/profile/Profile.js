import React, { useLayoutEffect, useState } from 'react'
import { OPTION_SUBMEN_USER } from '../../helpers/OPTION_SUBMENU_USER'
import { useIsMounted } from '../../hooks/useIsMounted'
import { ContainerOptions } from '../ContainerOptions/ContainerOptions'
import { ContainerInfoProfile } from '../Items/ContainerInfoProfile'
import { DoPublicationHeader } from '../Items/DoPublicationHeader'
import { SubMenuUser } from '../menus/SubMenuUser'

export const Profile = ({ uidURL, userData, userLogedReducer, isMyProfile }) => {
    const [ viewOption, setViewOption ] = useState( userLogedReducer.typeUser === 'ASC' ? OPTION_SUBMEN_USER.viewMyEvents : OPTION_SUBMEN_USER.viewMyGroups);
    const [ isMounted ] = useIsMounted();
    useLayoutEffect(() => {
        if   ( isMounted ) {
            ( isMyProfile !== undefined )
                && setViewOption( 
                    userLogedReducer.typeUser === 'ASC' 
                    ? OPTION_SUBMEN_USER.viewMyEvents 
                    : OPTION_SUBMEN_USER.viewMyGroups);
        }
    }, [ uidURL ])
    return (
        
        <>
            {
                isMyProfile &&
                    <div className="__title_pages">
                        <h1>Mi perfil</h1>
                    </div>
            }
            <ContainerInfoProfile { ...userData } isMyProfile ={ isMyProfile } />
            {
                ( isMyProfile && userData.typeUser === 'ASC' ) 
                    && <DoPublicationHeader 
                            displayName={ userData.displayName } 
                            textSecondary = { `Categoria • ${ userData.category }` } 
                            image = { userData.image } 
                        />
            }
                { 
                    (isMyProfile ) 
                        && <SubMenuUser 
                                setViewOption = { setViewOption }
                                typeUser = { userData.typeUser }
                            />
                        
                }
                <div className = '__wrapper_feed_publications'>
                    {
                        !!viewOption && <ContainerOptions uid = { uidURL } optionMenu = { isMyProfile ? viewOption : 1 } />
                    }
                </div>
        </>
    )
}
