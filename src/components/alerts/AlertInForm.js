import React from 'react'

export const AlertInForm = ({ styleAlert, title, descriptionError }) => {
    return (
        <div className = {`__alert_wrapper_in_form ${styleAlert} animate__animated animate__fadeIn`}>
            <p>{ title }</p>
            <p>{ descriptionError }</p>
        </div>
    )
}
