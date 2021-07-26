import React,{ useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { useIsMounted } from '../../hooks/useIsMounted';
import { fetchGetInfoUserLoged } from '../../services/fetchGetInfoUserLoged';

import { ProfileScreenLoading } from '../loadings/ProfileScreenLoading';
import { ContainerInfoProfile } from '../Items/ContainerInfoProfile';
import { DoPublicationHeader } from '../Items/DoPublicationHeader';
import { ContainerOptions } from '../ContainerOptions/ContainerOptions';
import { SubMenuProfileAsc } from '../menus/SubMenuProfileAsc';
import { OPTION_SUBMEN_USER } from '../../helpers/OPTION_SUBMENU_USER';


export const ProfileScreen = (  ) => {

    const { userLogedReducer } = useSelector( state => state );
    const dispatch = useDispatch();

    const location = useLocation();
    const queryString = require('query-string');
    const { q:uidURL } = queryString.parse(location.search);

    const [ isMounted ] = useIsMounted();
    const [ viewOption, setViewOption ] = useState( OPTION_SUBMEN_USER.viewMyEvents );
    const [ userData, setUserData ] = useState({});

    let isMyProfile = userLogedReducer?.uid ? ( userLogedReducer.uid === uidURL ): undefined;

    useEffect(() => {
        if ( isMounted ) {
            ( isMyProfile !== undefined )
                && isMyProfile 
                    ? setUserData( userLogedReducer ) 
                    : fetchGetInfoUserLoged( uidURL ).then ( setUserData );
        }
    }, [ dispatch, userLogedReducer,uidURL, isMounted, isMyProfile ])

    if( !userData?.uid ) {
        return (
            <>
                <h1>Mi perfil</h1>
                <ProfileScreenLoading />  
            </>
        )
     }
    return (
        <>
            <div className="__title_pages"><h1>Mi perfil</h1></div>
            <ContainerInfoProfile { ...userData } />
            {
                 (isMyProfile && userData.typeUser === 'ASC') &&
                <DoPublicationHeader 
                    displayName={ userData.displayName } 
                    textSecondary = { `Categoria • ${ userData.category }` } 
                    image = { userData.image } 
                />
            }
            { 
                (isMyProfile && userData.typeUser === 'ASC') 
                    && <SubMenuProfileAsc 
                            setViewOption = { setViewOption }
                            setUserData  = { setUserData }
                        />
            }
            <div className = '__wrapper_feed_publications'>
            {
                !!viewOption && <ContainerOptions uid = { uidURL } optionMenu = { isMounted ? viewOption : 1 } />
            }
            </div>
        </>
    )
}
