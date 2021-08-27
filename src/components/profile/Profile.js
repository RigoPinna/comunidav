import React, { useEffect, useState } from 'react'
import { OPTION_SUBMEN_USER } from '../../helpers/OPTION_SUBMENU_USER'
import { useIsMounted } from '../../hooks/useIsMounted'
import { EventsUser } from '../events&publications/EventsUser'
import { WrapperFeed } from '../events&publications/WrapperFeed'
import { FavoritesAssociations } from '../favoriteAsc/FavoritesAssociations'
import { GroupsEvents } from '../groupsEvents/GroupsEvents'
import { ContainerInfoProfile } from '../Items/ContainerInfoProfile'
import { DoPublicationHeader } from '../Items/DoPublicationHeader'
import { ProfileScreenLoading } from '../loadings/ProfileScreenLoading'
import { SubMenuUser } from '../menus/SubMenuUser'
import { ModalCreateEvent } from '../modals/ModalCreateEvent'

export const Profile = ({ uidURL, userData, userLogedReducer, isMyProfile }) => {
    const [ viewOption, setViewOption ] = useState( undefined );
    const [ isMounted ] = useIsMounted();
    useEffect(() => {
        if   ( isMounted ) {
            if ( !!isMyProfile ) {
                setViewOption( 
                    userLogedReducer.typeUser === 'ASC' 
                    ? OPTION_SUBMEN_USER.viewMyEvents 
                    : OPTION_SUBMEN_USER.viewMyGroups);
            } else {
                ( typeof isMyProfile !== undefined ) && setViewOption( 1 )
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
                    {
                        ( viewOption === OPTION_SUBMEN_USER.viewMyGroups )
                            && <GroupsEvents />
                    }
                    {
                        ( viewOption === OPTION_SUBMEN_USER.viewMyFav )
                            && <FavoritesAssociations />
                    }
               </WrapperFeed>
        </>
    )
}
