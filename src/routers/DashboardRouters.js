import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

import { getDataUserLoged } from '../reducers/authReducer'
import { useIsMounted } from '../hooks/useIsMounted'
import { types } from '../types'
import { useIsLoged } from '../hooks/useIsLoged';

import { LoadingScreen } from '../components/loadings/LoadingScreen'
import { NavBar } from '../components/menus/NavBar'
import { HomeScreen } from '../components/Pages/HomeScreen'
import { InboxScreen } from '../components/Pages/InboxScreen'
import { SearchScreen } from '../components/Pages/SearchScreen'
import { ProfileScreen } from '../components/Pages/ProfileScreen'
import { ColumnRight } from '../components/ColumnRight'
import { ModalViewImage } from '../components/modals/ModalViewImage'


export const DashboardRouters = ({ history, location }) => {

  useIsLoged( history, location );
  const { uiReducer } = useSelector( state => state );
  const dispatch = useDispatch();
  const [ isMounted ] = useIsMounted();
  useEffect(() => {
    if ( isMounted )  {
      const uid = localStorage.getItem( 'uid' );
      if( uid ) {
        dispatch( getDataUserLoged( uid ) );
        dispatch({
          type: types.loadigApp, 
          payload: false 
        });
      } else {
        history.replace('/login')
      }
    }
    
  }, [dispatch, isMounted ]);

  if (uiReducer.loading ) {
      return ( <LoadingScreen />)
  }  
  return (
      <>
        { uiReducer.viewModalImage && <ModalViewImage /> }
        <NavBar />  
        <main>
            <Switch>
              <Route exact path = "/home" component={HomeScreen}/>
              <Route exact path = "/inbox" component={InboxScreen}/>
              <Route exact path = "/search" component={SearchScreen}/>
              <Route exact path ="/verify" component = { ProfileScreen } />
              <Route path = "/association/:uid" component={ ProfileScreen }/>
              <Redirect exact to="/home" />
            </Switch>
            <ColumnRight history = {history} />
        </main>
      </>
  )
}
