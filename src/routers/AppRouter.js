import React, { useReducer } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { LoginScreen } from '../components/Pages/LoginScreen';
import { RegisterScreen } from '../components/Pages/RegisterScreen';
import { RegisterContext } from '../components/RegisterUser/RegisterContext';
import { initialState, registerReducer } from '../components/RegisterUser/registerReducer';
import { DashboardRouters } from './DashboardRouters';

export const AppRouter = () => {
    const [ stateProgress, dispatch ] = useReducer( registerReducer,  initialState );
    return (
       
            <Router>
                <Switch>
                    <Route exact path ="/login" component = { LoginScreen } />
                    <RegisterContext.Provider value = { { stateProgress, dispatch } }>
                        <Route exact path ="/register" component = { RegisterScreen } />

                    </RegisterContext.Provider>
                    <Route path="/" component = { DashboardRouters } />
                </Switch>
            </Router>
    )
}
