import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router-dom'

import { getDataUserLoged } from '../reducers/authReducer'
import { useIsMounted } from '../hooks/useIsMounted'
import { types } from '../types'
import { LoadingScreen } from '../components/loadings/LoadingScreen'
import { NavBar } from '../components/menus/NavBar'
import { HomeScreen } from '../components/Pages/HomeScreen'
import { InboxScreen } from '../components/Pages/InboxScreen'
import { SearchScreen } from '../components/Pages/SearchScreen'
import { ColumnRight } from '../components/ColumnRight'
import { ModalViewImage } from '../components/modals/ModalViewImage'
import { NavBarMovile } from '../components/menus/NavBarMobile'
import { ModalSuscribeEvent } from '../components/modals/ModalSuscribeEvent'
import { addAllGroups } from '../reducers/groupsEventReducer'
import { addAllFavorites } from '../reducers/ascFavoritesReducer'
import { VerifyScreen } from '../components/Pages/VerifyScreen'
import { ConfigScreen } from '../components/Pages/ConfigScreen'
import { useIsVerify } from '../hooks/useIsVerify'
import { addAllEvents } from '../reducers/myEventsReducer'
import { CreateEventScreen } from '../components/Pages/CreateEventScreen'
import { EventScreen } from '../components/Pages/EventScreen'
import { ModalListParticipants } from '../components/modals/ModalListParticipants'
import { MapaScreen } from '../components/Pages/MapaScreen'

import { EffectConffetti } from '../components/Conffetti/EffectConffetti'
import { MyProfileScreen } from '../components/Pages/MyProfileScreen'
import { PublicProfileAsc } from '../components/profile/PublicProfileAsc'
import { ChatScreen } from '../components/Pages/ChatScreen'
import { openAlert } from '../reducers/uiReducer'

export const DashboardRouters = ({ history, location }) => {
    // useIsLoged( history, location );
    const { uiReducer, userLogedReducer } = useSelector( state => state );
    const dispatch = useDispatch();
    const uid = localStorage.getItem( 'uid' );
    const token = sessionStorage.getItem( 'token' );
    const [ isMounted ] = useIsMounted();
    useEffect(() => {
        if ( isMounted )  {
          if( uid && token) {
            dispatch( getDataUserLoged( uid ) );
            dispatch(addAllFavorites( uid ))
          } else {
            history.replace('/login')
          }
        } else {
          localStorage.removeItem('uid');
        }
    }, [ uid, token, dispatch,isMounted ]);
    useEffect(()=> {
      if ( userLogedReducer?.uid ) {
        dispatch( openAlert('Termios de uso y aviso de privacidad',`**Hola, ${userLogedReducer.namePerson}.**\n\nHan ocurrido algunos cambios importantes en **Comunidav**, se han actualizando nuestros **"Términos y condiciones"** y **"Aviso de privacidad.**\n\n\n Por lo que para continuar debes aceptar dichos "Términos y condiciones" y "Aviso de privacidad"`,()=>{}) )
        userLogedReducer.typeUser ==="ASC" && dispatch( addAllEvents( userLogedReducer.uid ));
        dispatch(  addAllGroups( uid) );
        dispatch({
          type: types.loadigApp, 
          payload: false 
        });

      }
    },[ userLogedReducer.uid, dispatch ])
    if ( uiReducer.loading ) {
        return ( <LoadingScreen />)
    }  
    return (
        <>
          {
            uiReducer.viewConffetti && <EffectConffetti />
          }
          { uiReducer.viewModalImage && <ModalViewImage /> }
          { uiReducer.viewModalSuscribe && <ModalSuscribeEvent /> }
          { uiReducer.viewModalListParticipants && <ModalListParticipants /> }
          <NavBar history = { history } /> 
          <main>
              <section>
                <Switch>
                  <Route exact path = "/profile" component = { MyProfileScreen } />
                  <Route exact path = "/association/:uid" component = { PublicProfileAsc  }/>
                  <Route exact path = "/create" component = { CreateEventScreen }/>
                  <Route exact path = "/chat" component = { ChatScreen }/>
                  <Route exact path = "/home" component = { HomeScreen }/>
                  <Route exact path = "/event" component = { EventScreen }/>
                  <Route exact path = "/inbox" component = { InboxScreen }/>
                  <Route exact path = "/search" component = { SearchScreen }/>
                  <Route exact path = "/config" component = { ConfigScreen }/>
                  <Route exact path ="/verify" component = { VerifyScreen } />
                  <Route exact path ="/mapa" component = { MapaScreen } />
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
