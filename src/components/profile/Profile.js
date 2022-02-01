import React, { useEffect, useState } from 'react'
import { OPTION_SUBMEN_USER } from '../../helpers/OPTION_SUBMENU_USER'
import { useIsMounted } from '../../hooks/useIsMounted'
import { useIsVerify } from '../../hooks/useIsVerify'
import { EventsUser } from '../events&publications/EventsUser'
import { WrapperFeed } from '../events&publications/WrapperFeed'
import { FavoritesAssociations } from '../favoriteAsc/FavoritesAssociations'
import { GroupsEvents } from '../groupsEvents/GroupsEvents'
import { ContainerInfoProfile } from '../Items/ContainerInfoProfile'
import { DoPublicationHeader } from '../Items/DoPublicationHeader'
import { SubMenuUser } from '../menus/SubMenuUser'
import { WrapperFeedAssociations } from './WrapperFeedAssociations'

export const Profile = ({ userData }) => {
    const [ viewOption, setViewOption ] = useState( undefined );
    const [ isMounted ] = useIsMounted();
    useIsVerify( userData );
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
            <ContainerInfoProfile { ...userData } isMyProfile ={ true } viewButtonBack={false}/>
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
            </WrapperFeed>
            <WrapperFeedAssociations>
                {
                    ( viewOption === OPTION_SUBMEN_USER.viewMyFav )
                        && <FavoritesAssociations />
                            
                }
            </WrapperFeedAssociations>
        </>
    )
}
