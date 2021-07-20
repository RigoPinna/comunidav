import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useIsMounted } from '../../hooks/useIsMounted';
import { addMyEvents } from '../../reducers/myEventsReducer';
import { fetchGetInfoUserLoged } from '../../services/fetchGetInfoUserLoged';
import { ContainerOptions } from '../ContainerOptions/ContainerOptions';
import { ContainerInfoProfile } from '../Items/ContainerInfoProfile';
import { DoPublicationHeader } from '../Items/DoPublicationHeader';

import { ProfileScreenLoading } from '../loadings/ProfileScreenLoading';
import { SubMenuProfileAsc } from '../menus/SubMenuProfileAsc';

const OPTION_MENU = {
    viewMyEvents: 1,
    viewMyGroups: 2,
    viewMyFav: 3,
}
export const ProfileScreen = (  ) => {
    
    const { uid:uidURL } = useParams();
    const dispatch = useDispatch();
    const { userLogedReducer } = useSelector( state => state);
    const [ isMounted ] = useIsMounted();
    const [ viewOption, setViewOption ] = useState( OPTION_MENU.viewMyEvents );
    const [ userData, setUserData ] = useState({})
    let isVisitProfileOltherProfile = userLogedReducer?.uid ? ( userLogedReducer.uid === uidURL ): undefined;
    useEffect(() => {
        if ( isMounted ) {
            if ( isVisitProfileOltherProfile !== undefined ) {
                if ( isVisitProfileOltherProfile ) {
                    setUserData( userLogedReducer );
                } else {
                    fetchGetInfoUserLoged( uidURL).then ( resp => {
                        setUserData( resp );

                    })
                }
            }
        }
    }, [ dispatch, userLogedReducer,uidURL ])
    if( !userData?.uid ) {
        return (
         <section>
             <h1>Mi perfil</h1>
             <ProfileScreenLoading />  
         </section>
        )
     }
    return (
        <section>
            <div className="__title_pages"><h1>Mi perfil</h1></div>
            <ContainerInfoProfile { ...userData }/>
            {
                 (isVisitProfileOltherProfile && userData.typeUser === 'ASC') &&
                <DoPublicationHeader 
                    displayName={ userData.displayName } 
                    textSecondary = { userData.userName } 
                    image = { userData.image } 
                />
            }
            { 
                (isVisitProfileOltherProfile && userData.typeUser === 'ASC') 
                    && <SubMenuProfileAsc setViewOption = { setViewOption } />
            }
            <div className = '__wrapper_feed_publications'>
            {
                !!viewOption && <ContainerOptions uid = { uidURL } optionMenu = { viewOption } />
            }
            </div>
        </section>
    )
}
