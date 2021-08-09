import React from 'react'
import { WrapperModalsOrAlerts } from '../modals/WrapperModalsOrAlerts';
import { LoadingInComponent } from '../loadings/LoadingInComponent'

export const Alert = ({ title, contentText = '', isAlertLoading = false,addButtonAccepter = false, actionButtonAccept, textButton = 'Aceptar' }) => {
    return (
        <WrapperModalsOrAlerts>
            <div className="__wrapper_alert">
                <div className="__alert_header">
                    <h3>{title}</h3>
                </div>
                <div className = '__alert_body'>
                { 
                    isAlertLoading 
                        ? <LoadingInComponent textLoading = { contentText } />
                        :  <p>{ contentText }</p>
                }
                </div>
                <div className = "__alert_footer">
                    {
                        addButtonAccepter 
                            && <button 
                                    onClick = { actionButtonAccept }
                                    className = "__btn">
                                        { textButton }
                                </button>
                    }
                    
                    
                </div>
            </div>
            
        </WrapperModalsOrAlerts>
    )
}
