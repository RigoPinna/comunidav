import React, { useContext, useState } from 'react'
import { useValidateForm } from '../../hooks/useValidateForm';
import { fetchGetStates } from '../../services/fetchGetStates';
import { IconArrowRight } from '../iconos/IconArrowRight'
import { RegisterContext } from './RegisterContext';
import { goToassociationData, goToLocationData, goToUserData, isFinishFetching, isFinishProcess } from './registerReducer';

export const WrapperButtonsRegister = ({ actualStep, formData, validForm, setValidForm }) => {
    const { stateProgress, dispatch } = useContext( RegisterContext );
    const [ OBJ_VALIDATED, isValid ] = useValidateForm(validForm ,formData );
    const handleGoToNextStep = ( evt ) => {
        evt.preventDefault();
        switch ( actualStep ) {
            case 1:
                ( isValid ) 
                    ? dispatch( goToLocationData( formData ) )
                    : setValidForm( OBJ_VALIDATED )
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
                { 
                    ( stateProgress.totallyStep === actualStep )
                        ? <button onClick = { hanldeStartCreateUser }className = "__btn __btn_created" >
                            Crear cuenta
                        </button> 
                        : <button onClick = { handleGoToNextStep }className = "__btn " >
                            <p>Siguiente</p>
                            <IconArrowRight />
                            </button>  
                }
            </div>
        </>
    )
}
