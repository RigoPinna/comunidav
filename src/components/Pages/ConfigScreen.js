import React from 'react'
import { useSelector } from 'react-redux'
import { ConfigImg } from '../configUser/ConfigImg'

export const ConfigScreen = () => {
    const { userLogedReducer }= useSelector(state => state )
    return (
        <form className="__wrapper_config">
            <h1>Configuración de cuenta</h1>
           <ConfigImg imageOld = { userLogedReducer.image }/>
            
        </form>
    )
}
