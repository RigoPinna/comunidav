import React, { useContext, useState } from 'react'
import { fetchGetStates } from '../../services/fetchGetStates';
import { Alert } from '../alerts/Alert';
import { IconArrowRight } from '../iconos/IconArrowRight'
import { RegisterContext } from './RegisterContext';
import { goToassociationData, goToLocationData, goToPersonData, goToStartRegister, goToUserData, isFinishFetching, isFinishProcess } from './registerReducer';

export const WrapperButtonsRegister = ({ actualStep, formData }) => {
    const { stateProgress, dispatch } = useContext( RegisterContext );
    const handleGoBackStep = ( evt ) => {
        evt.preventDefault();
        switch ( actualStep ) {
            case 1:
                    dispatch( goToStartRegister() )
                break;
            case 2:
                    dispatch( goToPersonData( stateProgress.totallyStep, stateProgress.typeRegister ) )
                break;
            case 3:
                    dispatch( goToLocationData({}) )
                break;
            case 4:
                    dispatch( goToUserData({}) )
                break;
        
            default:
                break;
        }
    }
    const handleGoToNextStep = ( evt ) => {
        evt.preventDefault();
        switch ( actualStep ) {
            case 1:
                dispatch( goToLocationData(formData) )
                break;
            case 2:
                dispatch( goToUserData(formData) )
                break;
            case 3:
                    dispatch( goToassociationData(formData) )
                break;
            default:
                break;
        }
    }
    const hanldeStartCreateUser = ( evt ) => {
        evt.preventDefault();

        if ( stateProgress.totallyStep === actualStep ) {
            dispatch( isFinishProcess( formData) );
            fetchGetStates().then( states => {
                
                dispatch( isFinishFetching() );
            })
        }
    }
    return (
        <>
            <div className = "__form_register_wrapper_buttons_footer">
                <button
                    onClick={ handleGoBackStep }
                    className = "__btn" 
                >
                    Volver
                </button>
                { 
                    ( stateProgress.totallyStep === actualStep )
                        ? <button onClick = { hanldeStartCreateUser }className = "__btn" >
                            Crear cuenta
                        </button> 
                        : <button onClick = { handleGoToNextStep }className = "__btn" >
                            <p>Siguiente</p>
                            <IconArrowRight />
                            </button>  
                }
            </div>
        </>
    )
}
