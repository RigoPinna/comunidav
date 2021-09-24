import React from 'react'
import { useDispatch } from 'react-redux'
import { closeAllModal } from '../../reducers/uiReducer';

export const GroupButtonsWelcome = () => {
    const dispatch = useDispatch();
    
    return (
        <>
            <button
                onClick = { () =>{ dispatch( closeAllModal() )} } 
                className = "__btn"
            >
                <p>Entendido, visitar más tarde</p>
            </button>
        </>
    )
}
