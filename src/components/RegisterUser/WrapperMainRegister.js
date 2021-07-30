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

export const WrapperMainRegister = () => {
    const { stateProgress } = useContext( RegisterContext );
    
    return (
        <>
        
            { stateProgress.startRegister 
                &&  (   <div className = "__wrapper_register_content animate__animated animate__fadeIn"> 
                            <StartRegister />
                        </div> 
                    )
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
                            title={"Creado usuario"} 
                            contentText = { !stateProgress.isFinishFetch ? 'Estamos creado tu usuario, esto podria tardar unos segundos' : 'Se ha creado tu usuario correctamente' }
                            isAlertLoading = { !stateProgress.isFinishFetch }
                        />
            }
        </>
        
    )
}
