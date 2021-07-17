import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { LoginScreen } from '../components/Pages/LoginScreen';
import { DashboardRouters } from './DashboardRouters';

export const AppRouter = () => {
    
    return (
       
            <Router>
                <Switch>
                    <Route exact path ="/login" component = { LoginScreen } />
                    <Route path="/" component = { DashboardRouters } />
                </Switch>
            </Router>
    )
}
