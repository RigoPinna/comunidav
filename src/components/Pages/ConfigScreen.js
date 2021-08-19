import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { ConfigDataPrivate } from '../configUser/ConfigDataPrivate'
import { ConfigImg } from '../configUser/ConfigImg'
import { ConfigPassword } from '../configUser/ConfigPassword'
import { WrapperDetails } from '../configUser/WrapperDetails'
import { IconAssociation } from '../iconos/IconAssociation'
import { IconLocation } from '../iconos/IconLocation'
import { IconDataPrivate } from '../iconos/IconDataPrivate'
import { IconInputPassword } from '../iconos/IconInputPassword'
import { ConfigDataAssociation } from '../configUser/ConfigDataAssociation'
import { ConfigLocation } from '../configUser/ConfigLocation'
export const ConfigScreen = () => {

    const { userLogedReducer }= useSelector(state => state ); 


    return (
        <>
            <Helmet>
               <title>Comunidav | Settings</title>

            </Helmet>
            <form className="__wrapper_config">
                <h1>Configuración de cuenta</h1>
                <ConfigImg imageOld = { userLogedReducer.image }/>
                <strong>{ userLogedReducer.displayName }</strong>
                <p>@{ userLogedReducer.userName }</p>
                <WrapperDetails title={'Datos personales(No público)'} Icon ={IconDataPrivate}>
                    <ConfigDataPrivate { ...userLogedReducer } />
                </WrapperDetails>
                <WrapperDetails title={'Región(Público)'} Icon ={ IconLocation }>
                    <ConfigLocation { ...userLogedReducer } />
                </WrapperDetails>
                {
                    ( userLogedReducer.typeUser === 'ASC') 
                        && <WrapperDetails title = {'Datos de tu asociación(Público)'} Icon = { IconAssociation }>
                                <ConfigDataAssociation { ...userLogedReducer }/>

                            </WrapperDetails>
                }
                <WrapperDetails title={'Restablecer contraseña'} Icon ={ IconInputPassword }>
                    <ConfigPassword />
                </WrapperDetails>
                
            </form>
        </>
    )
}
