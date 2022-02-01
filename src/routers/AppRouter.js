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
import { ResetPasswordScreen } from '../components/Pages/ResetPasswordScreen';
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
                    <Route exact path="/forget" component = { ResetPasswordScreen } />
                    <Route path="/" component = { DashboardRouters } />
                </Switch>
            </Router>
    )
}
