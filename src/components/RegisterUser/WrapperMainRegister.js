import React, { useContext } from 'react'
import { SelectsLocation } from './SelectsLocation';
import { LodingLinear } from '../loadings/LodingLinear';
import { FormRegisterLayout } from './FormRegisterLayout';
import { RegisterContext } from './RegisterContext';
import { StartRegister } from './StartRegister'
import { TitleRegister } from './TitleRegister';
import { WrapperInputsPersonData } from './WrapperInputsPersonData';
import { WrapperInputsUserData } from './WrapperInputsUserData';
import { Alert } from '../alerts/Alert';
import { WrapperInputsDataAsc } from './WrapperInputsDataAsc';
import { isFinishProcess, viewAlertRFC } from './registerReducer';

export const WrapperMainRegister = ({ history }) => {

    const { stateProgress, dispatch } = useContext( RegisterContext );
    
    return (
        <>
        
            { stateProgress.startRegister 
                &&  <StartRegister />
                    
            }
             { ( !stateProgress.startRegister ) 
                && <FormRegisterLayout>
                        <TitleRegister />   
                        <LodingLinear 
                            progress = { stateProgress.progress } 
                            totallyStep = { stateProgress.totallyStep }
                        />
                        { 
                            stateProgress.personData 
                                && <WrapperInputsPersonData /> 
                        }
                        {
                            stateProgress.locationData 
                                && <SelectsLocation />
                        }
                        {
                            stateProgress.userData
                                && <WrapperInputsUserData />
                        }
                        {
                            stateProgress.associationData
                             && <WrapperInputsDataAsc />
                        }
                       
                    </FormRegisterLayout>
            }
            {
                stateProgress.isFinish 
                    && <Alert 
                            title = { "Creado usuario" } 
                            contentText = { !stateProgress.isFinishFetch ? 'Estamos creado tu usuario, esto podria tardar unos segundos' : stateProgress.respFetch }
                            isAlertLoading = { !stateProgress.isFinishFetch }
                            addButtonAccepter = { stateProgress.isFinishFetch }
                            actionButtonAccept = { () => {
                                if ( stateProgress.status === 'accepted' ) {
                                    console.log('aceptado')
                                    dispatch( isFinishProcess( stateProgress.formData, false ) );
                                    history.replace('/login')
                                } else {
                                    console.log('error')
                                    dispatch( isFinishProcess( stateProgress.formData, false ) );
                                }
                            }} 
                        />
            }
            { 
                stateProgress.isAceptedRFC
                    && <Alert
                            title = { 'RFC inválido' }
                            contentText = {'El RFC que proporcionó ya esta asociado a otra cuenta'}
                            addButtonAccepter = { true }
                            actionButtonAccept = { () => { 
                                 dispatch( viewAlertRFC( false ) )
                            } }     
                        /> 
            }
        </>
        
    )
}
