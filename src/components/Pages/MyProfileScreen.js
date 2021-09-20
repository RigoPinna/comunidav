import React,{ useState, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom';

import {  useSelector } from 'react-redux';
import { fetchGetInfoUser } from '../../services/fetchGetInfoUser';
import { Profile } from '../profile/Profile';
import { Helmet } from 'react-helmet';
import { ProfileScreenLoading } from '../loadings/ProfileScreenLoading';


export const MyProfileScreen = (  ) => {
    const { userLogedReducer } = useSelector( state => state );
    
    return (
        <>
        <Helmet>
            <title>Comunidav | { userLogedReducer.displayName }</title>
            <meta charset="utf-8"/>
        </Helmet>
            {
                !!userLogedReducer.uid 
                    ? <Profile userData={ userLogedReducer } />
                    : <ProfileScreenLoading />
            }
           
            
        </>
    )
}
