import React from 'react'
import { LoadingInComponent } from '../loadings/LoadingInComponent'
import { WrapperAlert } from './WrapperAlert';

export const Alert = ({ title="Titulo", contentText = 'Contenido', isAlertLoading = false,addButtonAccepter = true, actionButtonAccept=()=>{}, textButton = 'Aceptar', addButtonCanceled=false,actionButtonCanceled=()=>{} }) => {
    return (
        <WrapperAlert>
            <div className="__wrapper_alert animate__animated  animate__headShake">
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
                        addButtonCanceled 
                            && <button 
                                    onClick = { actionButtonCanceled }
                                    className = "__btn">
                                        Cancelar
                                </button>
                    }
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
            
        </WrapperAlert>
    )
}
