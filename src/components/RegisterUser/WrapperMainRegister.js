import React, { useContext } from 'react'
import { LodingLinear } from '../loadings/LodingLinear';
import { FormRegisterLayout } from './FormRegisterLayout';
import { RegisterContext } from './RegisterContext';
import { StartRegister } from './StartRegister'
import { WrapperInputsPersonData } from './WrapperInputsPersonData';

export const WrapperMainRegister = () => {
    const { stateProgress} = useContext( RegisterContext );
    const { stepRegister } = stateProgress;
    return (
        <>
            { stateProgress.startRegister 
                &&  (   <div className = "__wrapper_register_content animate__animated animate__fadeIn"> 
                            <StartRegister />
                        </div> 
                    )
            }
             { ( !stateProgress.startRegister ) 
             &&<FormRegisterLayout>
                    <LodingLinear 
                        progress = { stepRegister.progress } 
                        totallyStep = { stepRegister.totallyStep }
                        />
                     <h2>Ingresa tus datos personales</h2>
                    { stateProgress.personData && <WrapperInputsPersonData /> }
                </FormRegisterLayout>
            }
        </>
        
    )
}
