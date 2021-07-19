import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ColumnRight } from '../components/ColumnRight'
import { LoadingScreen } from '../components/loadings/LoadingScreen'
import { ProfileScreenLoading } from '../components/loadings/ProfileScreenLoading'

import { NavBar } from '../components/menus/NavBar'
import { ModalViewImage } from '../components/modals/ModalViewImage'
import { HomeScreen } from '../components/Pages/HomeScreen'
import { InboxScreen } from '../components/Pages/InboxScreen'
import { ProfileScreen } from '../components/Pages/ProfileScreen'
import { SearchScreen } from '../components/Pages/SearchScreen'
import { useIsMounted } from '../hooks/useIsMounted'
import { getDataUserLoged } from '../reducers/authReducer'
import { types } from '../types'


export const DashboardRouters = ({ history, location, match }) => {
  
      const { uiReducer } = useSelector( state => state );
      const dispatch = useDispatch();
      const [ isLoadingApp, setLoadingApp ] = useState( uiReducer.loading );
      const [ isMounted ] = useIsMounted();

      useEffect(() => {
        if ( isMounted )  {
          dispatch( getDataUserLoged( 174 ) );
          dispatch({
            type: types.loadigApp, 
            payload: false 
          });
          setLoadingApp( false );
        }
        
      }, [ dispatch, isMounted ])
      if (isLoadingApp ) {
          return ( <LoadingScreen />)
      }  
  return (
      <>
        { uiReducer.viewModalImage && <ModalViewImage /> }
        <NavBar />  
        <main>
            <Switch>
              
              <Route exact path = "/profile" component={ProfileScreen}/>
              <Route exact path = "/home" component={HomeScreen}/>
              <Route exact path = "/inbox" component={InboxScreen}/>
              <Route exact path = "/search" component={SearchScreen}/>
              <Redirect to="/profile" />

            </Switch>
            <ColumnRight history = {history} />
        </main>
      </>
  )
}
