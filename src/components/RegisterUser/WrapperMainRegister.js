import React, { useContext } from 'react'
import { IconArrowRight } from '../iconos/IconArrowRight';
import { SelectsLocation } from '../Inputs/SelectsLocation';
import { LodingLinear } from '../loadings/LodingLinear';
import { FormRegisterLayout } from './FormRegisterLayout';
import { RegisterContext } from './RegisterContext';
import { StartRegister } from './StartRegister'
import { TitleRegister } from './TitleRegister';
import { WrapperButtonsRegister } from './WrapperButtonsRegister';
import { WrapperInputsPersonData } from './WrapperInputsPersonData';

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
                        <LodingLinear 
                            progress = { stateProgress.progress } 
                            totallyStep = { stateProgress.totallyStep }
                        />
                        <TitleRegister />
                        { 
                            stateProgress.personData 
                                && <WrapperInputsPersonData /> 
                        }
                        {
                            stateProgress.locationData 
                                && <SelectsLocation />
                        }
                       
                    </FormRegisterLayout>
            }
        </>
        
    )
}
