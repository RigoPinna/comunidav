import React from 'react'

export const FormRegisterLayout = ({ children }) => {
    return (
        <form
            className = '__form_register'
            autoComplete ="off">
            { children }
        </form>
    )
}
