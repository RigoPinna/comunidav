import React,{ useState, useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom';

import { useSelector } from 'react-redux';

import { useIsMounted } from '../../hooks/useIsMounted';
import { fetchGetInfoUserLoged } from '../../services/fetchGetInfoUserLoged';

import { ProfileScreenLoading } from '../loadings/ProfileScreenLoading';
import { Profile } from '../profile/Profile';


export const ProfileScreen = (  ) => {

    const { userLogedReducer } = useSelector( state => state );
    const location = useLocation();
    const queryString = require('query-string');
    const { q:uidURL } = queryString.parse(location.search);
    const [ isMounted ] = useIsMounted();
    const [ userData, setUserData ] = useState({});

    let isMyProfile = userLogedReducer?.uid ? ( userLogedReducer.uid === uidURL ): undefined;

    useEffect(() => {

        if ( isMounted ) {
            setUserData({});
            ( isMyProfile !== undefined )
                && isMyProfile 
                    ? setUserData( userLogedReducer ) 
                    : fetchGetInfoUserLoged( uidURL ).then ( setUserData );
        
        }
    }, [ userLogedReducer, uidURL,isMounted, isMyProfile ]);

    
    return (
        <>
        {
            ( !userData?.uid ) 
                ? <ProfileScreenLoading />
                : <Profile 
                    uidURL = { uidURL } 
                    userData = { userData } 
                    userLogedReducer = { userLogedReducer }
                    isMyProfile = {  isMyProfile }
                />
        }
            
        </>
    )
}
