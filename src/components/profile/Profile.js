import React, { useEffect, useState } from 'react'
import { OPTION_SUBMEN_USER } from '../../helpers/OPTION_SUBMENU_USER'
import { useIsMounted } from '../../hooks/useIsMounted'
import { EventsUser } from '../events&publications/EventsUser'
import { WrapperFeed } from '../events&publications/WrapperFeed'
import { FavoritesAssociations } from '../favoriteAsc/FavoritesAssociations'
import { GroupsEvents } from '../groupsEvents/GroupsEvents'
import { ContainerInfoProfile } from '../Items/ContainerInfoProfile'
import { DoPublicationHeader } from '../Items/DoPublicationHeader'
import { SubMenuUser } from '../menus/SubMenuUser'

export const Profile = ({ userData }) => {
    const [ viewOption, setViewOption ] = useState( undefined );
    const [ isMounted ] = useIsMounted();
    useEffect(() => {
        if ( isMounted ) {
            if( !!userData.uid ) {
                setViewOption( 
                    userData.typeUser === 'ASC' 
                    ? OPTION_SUBMEN_USER.viewMyEvents 
                    : OPTION_SUBMEN_USER.viewMyGroups);
        }

        }
    }, [ userData ])
    return (
        
        <>
            <ContainerInfoProfile { ...userData } isMyProfile ={ true } />
            {
                ( userData.typeUser === 'ASC' ) 
                    && <DoPublicationHeader 
                            displayName={ userData.displayName } 
                            textSecondary = { `Categoria • ${ userData.category }` } 
                            image = { userData.image } 
                        />
            }
            <SubMenuUser setViewOption = { setViewOption } typeUser = { userData.typeUser }/> 
            <WrapperFeed>
                {
                    ( viewOption === OPTION_SUBMEN_USER.viewMyEvents && userData.typeUser === 'ASC' )
                        && <EventsUser  uid={ userData.uid } />
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
