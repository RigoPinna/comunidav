import React, { useReducer } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { LoginScreen } from '../components/Pages/LoginScreen';
import { RegisterScreen } from '../components/Pages/RegisterScreen';
import { DashboardRouters } from './DashboardRouters';

export const AppRouter = () => {
   
    return (
       
            <Router>
                <Switch>
                    <Route exact path ="/login" component = { LoginScreen } />
                    <Route exact path ="/register" component = { RegisterScreen } />
                    <Route path="/" component = { DashboardRouters } />
                </Switch>
            </Router>
    )
}
