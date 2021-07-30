import React, { useContext } from 'react'
import { IconArrowLeft } from '../iconos/IconArrowLeft';
import { RegisterContext } from './RegisterContext';
import { goToLocationData, goToPersonData, goToStartRegister, goToUserData } from './registerReducer';

export const TitleRegister = () => {
    const { stateProgress, dispatch } = useContext( RegisterContext );
    const handleGoBackStep = ( evt ) => {
        evt.preventDefault();
        switch ( stateProgress.actualStep ) {
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
    return (
        <div className = "__form_register_title">
            <h1>Registro como { ( stateProgress.typeRegister === 'userAsc' ) ? 'asociación' : 'voluntario' }</h1>
            <span 
                onClick = { handleGoBackStep } 
                className="__btn">
                    <IconArrowLeft />
                    <p>Volver</p>
            </span>
            <p>{ stateProgress.titles[ stateProgress.actualStep - 1] }</p>
            <span>{`Paso ${ stateProgress.actualStep } de ${ stateProgress.totallyStep }`}</span>
        </div>
    )
}
