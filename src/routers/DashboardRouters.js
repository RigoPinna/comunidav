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
import { ConfigScreen } from '../components/Pages/ConfigScreen'
import { useIsVerify } from '../hooks/useIsVerify'
import { addAllEvents } from '../reducers/myEventsReducer'
import { CreateEventScreen } from '../components/Pages/CreateEventScreen'


export const DashboardRouters = ({ history, location }) => {
    useIsLoged( history, location );
    const { uiReducer, userLogedReducer } = useSelector( state => state );
    const dispatch = useDispatch();
    const uid = localStorage.getItem( 'uid' );
    const token = sessionStorage.getItem( 'token' );
    const [ isMounted ] = useIsMounted();
   
    useEffect(() => {
        if ( isMounted )  {
          if( uid && token) {
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
    }, [ uid, token ]);
    useIsVerify( history, userLogedReducer );
    useEffect(()=> {
      userLogedReducer?.uid && dispatch( addAllEvents( userLogedReducer.uid ))

    },[ userLogedReducer.uid ])
    if ( uiReducer.loading ) {
        return ( <LoadingScreen />)
    }  
    return (
        <>
          { uiReducer.viewModalImage && <ModalViewImage /> }
          { uiReducer.viewModalSuscribe && <ModalSuscribeEvent /> }
          <NavBar history = { history } /> 
          {/* <div className ="__wrapper_associationFrom_responsive">
                  <strong>Asociaciones en ...</strong>
                  <div className ="__wrapper_colunm_right_content_asociations">
                  <ContentAsociationsFromRegion historyRouter = { history }/>
                  </div>
                </div>  */}
          <main>
              <section>
                <Switch>
                  <Route exact path = "/user" component = { ProfileScreen }/>
                  <Route exact path = "/create" component = { CreateEventScreen }/>
                  <Route exact path = "/home" component = { HomeScreen }/>
                  <Route exact path = "/event" component = { ProfileScreen }/>
                  <Route exact path = "/inbox" component = { InboxScreen }/>
                  <Route exact path = "/search" component = { SearchScreen }/>
                  <Route exact path = "/config" component = { ConfigScreen }/>
                  <Route exact path ="/verify" component = { VerifyScreen } />
                  <Redirect exact to="/home" />
                </Switch>
              </section>
          </main>
          {
            userLogedReducer.isVerify && <ColumnRight history = {history} />
          }
          <NavBarMovile uid ={ uid }  />
        </>
    )
}
