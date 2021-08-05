import React, { useEffect } from 'react'
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
import { NavBarMovile } from '../components/menus/NavBarMobile'
import { ModalSuscribeEvent } from '../components/modals/ModalSuscribeEvent'
import { ContentAsociationsFromRegion } from '../components/ContentAsociationsFromRegion'
import { addAllGroups } from '../reducers/groupsEventReducer'
import { addAllFavorites } from '../reducers/ascFavoritesReducer'
import { VerifyScreen } from '../components/Pages/VerifyScreen'


export const DashboardRouters = ({ history, location }) => {

  useIsLoged( history, location );
  const { uiReducer } = useSelector( state => state );
  const dispatch = useDispatch();
  const [ isMounted ] = useIsMounted();
  const uid = localStorage.getItem( 'uid' );
  useEffect(() => {
    if ( isMounted )  {
      if( uid ) {
        console.log(uid)
        dispatch( getDataUserLoged( uid ) );
        dispatch(  addAllGroups( uid) );
        dispatch( addAllFavorites( uid ));
        dispatch({
          type: types.loadigApp, 
          payload: false 
        });
      } else {
        history.replace('/login')
      }
    } else {
      localStorage.removeItem('uid');
    }
    
  }, [ dispatch, isMounted, history, uid ]);

  if ( uiReducer.loading ) {
      return ( <LoadingScreen />)
  }  
  return (
      <>
        { uiReducer.viewModalImage && <ModalViewImage /> }
        { uiReducer.viewModalSuscribe && <ModalSuscribeEvent /> }
        <NavBar history = { history } /> 
        <div className ="__wrapper_associationFrom_responsive">
                <strong>Asociaciones en ...</strong>
                <div className ="__wrapper_colunm_right_content_asociations">
                <ContentAsociationsFromRegion historyRouter = { history }/>
                </div>
              </div> 
        <main>
            <section>
              
              <Switch>
                <Route exact path = "/home" component={HomeScreen}/>
                <Route exact path = "/inbox" component={InboxScreen}/>
                <Route exact path = "/search" component={SearchScreen}/>
                <Route exact path ="/verify" component = { VerifyScreen } />
                <Route exact path = "/user" component={ ProfileScreen }/>
                <Route exact path = "/event" component={ ProfileScreen }/>
                <Redirect exact to="/home" />
              </Switch>
            </section>
        </main>
            <ColumnRight history = {history} />
        <NavBarMovile uid ={ uid }  />
      </>
  )
}
