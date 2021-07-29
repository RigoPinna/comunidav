import React, { useContext } from 'react'
import { IconArrowRight } from '../iconos/IconArrowRight'
import { RegisterContext } from './RegisterContext';
import { goToassociationData, goToLocationData, goToPersonData, goToStartRegister, goToUserData } from './registerReducer';

export const WrapperButtonsRegister = ({ actualStep }) => {
    const { dispatch } = useContext( RegisterContext );

    const handleGoBackStep = ( evt ) => {
        evt.preventDefault();
        switch ( actualStep ) {
            case 1:
                    dispatch( goToStartRegister() )
                break;
            case 2:
                    dispatch( goToPersonData() )
                break;
            case 3:
                    dispatch( goToLocationData() )
                break;
            case 4:
                    dispatch( goToUserData() )
                break;
        
            default:
                break;
        }
    }
    const handleGoToNextStep = ( evt ) => {
        evt.preventDefault();
        switch ( actualStep ) {
            case 1:
                dispatch( goToLocationData() )
                break;
            case 2:
                dispatch( goToUserData() )
                break;
            case 3:
                    dispatch( goToassociationData() )
                break;
            default:
                break;
        }
    }
    return (
        <div className = "__form_register_wrapper_buttons_footer">
            <button
                onClick={ handleGoBackStep }
                className = "__btn" 
            >
                Volver
            </button>
            <button 
                onClick = { handleGoToNextStep }
                className = "__btn" 
            >
                <p>Siguiente</p>
                <IconArrowRight />
            </button>

        </div>
    )
}
