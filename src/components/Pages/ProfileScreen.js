import React,{ useState, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom';

import {  useSelector } from 'react-redux';
import { fetchGetInfoUser } from '../../services/fetchGetInfoUser';
import { Profile } from '../profile/Profile';
import { Helmet } from 'react-helmet';


export const ProfileScreen = (  ) => {

    const { userLogedReducer } = useSelector( state => state );
    const location = useLocation();
    const queryString = require('query-string');
    const { q:uidURL } = queryString.parse(location.search);
    const [ userData, setUserData ] = useState({});
    let isMyProfile = userLogedReducer?.uid ? ( userLogedReducer.uid === uidURL ): undefined;
    useLayoutEffect(() => {
        let controller = new AbortController();
        ( async () => {
            
            if( isMyProfile ) {
                setUserData( userLogedReducer )
            } else {
                // setLoading( true )
                fetchGetInfoUser( uidURL ).then( data => {
                    setUserData( data )
                    // setLoading( false )

                })

            }
        })();
        
        return () => controller?.abort();
    }, [ uidURL,isMyProfile,userLogedReducer ]);
    return (
        <>
            
            <Helmet>
                <title>Comunidav | { isMyProfile ?`${userLogedReducer.displayName}`  : `${userData.displayName}`}</title>
            </Helmet>
            {/* {
                loading 
                    ? <ProfileScreenLoading />
                    : <Profile 
                        uidURL = { uidURL } 
                        userData = { userData } 
                        userLogedReducer = { userLogedReducer }
                        isMyProfile = {  isMyProfile }
                    />

            } */}
            <Profile 
                        uidURL = { uidURL } 
                        userData = { userData } 
                        userLogedReducer = { userLogedReducer }
                        isMyProfile = {  isMyProfile }
                    />
            
        </>
    )
}
