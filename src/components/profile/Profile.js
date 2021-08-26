import React, { useEffect, useState } from 'react'
import { OPTION_SUBMEN_USER } from '../../helpers/OPTION_SUBMENU_USER'
import { useIsMounted } from '../../hooks/useIsMounted'
import { EventsUser } from '../events&publications/EventsUser'
import { WrapperFeed } from '../events&publications/WrapperFeed'
import { ContainerInfoProfile } from '../Items/ContainerInfoProfile'
import { DoPublicationHeader } from '../Items/DoPublicationHeader'
import { ProfileScreenLoading } from '../loadings/ProfileScreenLoading'
import { SubMenuUser } from '../menus/SubMenuUser'

export const Profile = ({ uidURL, userData, userLogedReducer, isMyProfile }) => {
    const [ viewOption, setViewOption ] = useState( userLogedReducer.typeUser === 'ASC' ? OPTION_SUBMEN_USER.viewMyEvents : OPTION_SUBMEN_USER.viewMyGroups);
    const [ isMounted ] = useIsMounted();
    useEffect(() => {
        if   ( isMounted ) {
            if ( !!isMyProfile ) {
                setViewOption( 
                    userLogedReducer.typeUser === 'ASC' 
                    ? OPTION_SUBMEN_USER.viewMyEvents 
                    : OPTION_SUBMEN_USER.viewMyGroups);
            } else {

                ( isMyProfile !== undefined && isMyProfile ) && setViewOption(1)
            }
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
               <WrapperFeed>
                    {
                        ( viewOption === OPTION_SUBMEN_USER.viewMyEvents )
                            && <EventsUser  uid={ uidURL } />
                    }
               </WrapperFeed>
        </>
    )
}
