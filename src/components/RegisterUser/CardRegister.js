import React, { useContext } from 'react'
import { RegisterContext } from './RegisterContext';
import { goToPersonData } from './registerReducer';


export const CardRegister = ({ title, sentence, Illustration, colorClass }) => {

    const { stateProgress, dispatch } = useContext( RegisterContext );
    
    const handleStarRegister = () => {
        dispatch( goToPersonData() );

    }
    return (
        <div
            onClick = { handleStarRegister } 
            className = "__card_register">
                <div className = { `__card_content_svg ${colorClass}` }>
                    <Illustration />
                </div>
                <h2>{ title }</h2>
                <p>{ sentence }</p>
           
        </div>
    )
}
