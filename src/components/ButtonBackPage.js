import React from 'react'

export const ButtonBackPage = ({ history } ) => {
    const habldeBlackPage = () => {
        history.goBack();
    }
    return (
        <button onClick = { habldeBlackPage } className = "__btn">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            <p>Volver</p>
        </button>
    )
}
