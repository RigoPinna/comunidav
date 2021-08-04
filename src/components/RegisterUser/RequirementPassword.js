import React from 'react'

export const RequirementPassword = () => {
    return (
        <div className="__form_wrapper_info_password">
            <h5>Requisitos de contraseña</h5>
            <p> -Al menos 8 caracteres</p>
            <p> -Sin espacios en blanco</p>
            <p> -Al menos un dígito</p>
            <p> -Al menos un letra MAYÚSCULA y una letra minúscula</p>
        </div>
    )
}
