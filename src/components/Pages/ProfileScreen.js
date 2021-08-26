import React,{ useState, useEffect, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { useIsMounted } from '../../hooks/useIsMounted';
import { fetchGetInfoUserLoged } from '../../services/fetchGetInfoUserLoged';

import { ProfileScreenLoading } from '../loadings/ProfileScreenLoading';
import { Profile } from '../profile/Profile';
import { Helmet } from 'react-helmet';
import { types } from '../../types';


export const ProfileScreen = (  ) => {

    const { userLogedReducer, uiReducer } = useSelector( state => state );
    const location = useLocation();
    const dispatch = useDispatch();
    const queryString = require('query-string');
    const { q:uidURL } = queryString.parse(location.search);
    const [ userData, setUserData ] = useState({});
    const [ loading, setLoading ] = useState( false );
    const [isMounted] = useIsMounted();
    let isMyProfile = userLogedReducer?.uid ? ( userLogedReducer.uid === uidURL ): undefined;
    useLayoutEffect(() => {
        let controller = new AbortController();
        ( async () => {
            
            if( isMyProfile ) {
                setUserData( userLogedReducer )
            } else {
                setLoading( true )
                fetchGetInfoUserLoged( uidURL ).then( data => {
                    setUserData( data )
                    setLoading( false )

                })

            }
            
            
        })();
        
        return () => controller?.abort();
    }, [ uidURL ]);
    return (
        <>
            
            <Helmet>
                <title>Comunidav | { isMyProfile ?`${userLogedReducer.displayName}`  : `${userData.displayName}`}</title>
            </Helmet>
            {
                loading 
                    ? 'Cargando...' 
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
