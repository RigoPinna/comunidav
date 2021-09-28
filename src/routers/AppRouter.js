import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { LoginScreen } from '../components/Pages/LoginScreen';
import { RegisterScreen } from '../components/Pages/RegisterScreen';
import { DashboardRouters } from './DashboardRouters';
import { useSelector } from 'react-redux'
import { Alert } from '../components/alerts/Alert'
export const AppRouter = () => {
    const { uiReducer, userLogedReducer } = useSelector( state => state );
    
    return (
       
            <Router>
                { uiReducer.viewAlert 
                    && <Alert 
                        title={uiReducer.title} 
                        contentText = { uiReducer.contentText }
                        textButton = { uiReducer.textButton || 'Aceptar'} 
                        actionButtonAccept = { uiReducer.actionButtonAccept }
                        addButtonCanceled = { uiReducer.addButtonCanceled }
                        actionButtonCanceled = { uiReducer.actionButtonCanceled }
                        />
                }
                <Switch>
                    <Route exact path ="/login" component = { LoginScreen } />
                    <Route exact path ="/register" component = { RegisterScreen } />
                    <Route path="/" component = { DashboardRouters } />
                </Switch>
            </Router>
    )
}
