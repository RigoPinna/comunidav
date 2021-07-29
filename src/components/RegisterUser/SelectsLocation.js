import React, { useContext } from 'react';

import { RegisterContext } from './RegisterContext';
import { WrapperButtonsRegister } from './WrapperButtonsRegister';
import { LoadingInComponent } from '../loadings/LoadingInComponent'
import { InputSelect } from '../Inputs/InputSelect';
import { useChangeForm } from '../../hooks/useChangeForm';
import { useChangeEffectLocation } from '../../hooks/useChangeEffectLocation';
export const SelectsLocation = () => {
    const { stateProgress } = useContext( RegisterContext );
    const [ inputFormValues,  handdleInputChange ] = useChangeForm({state:1, country:0});
    const [arrayStates, arrayCountries] = useChangeEffectLocation( inputFormValues );
    
    return (
        <div className="animate__animated animate__fadeIn">
            <div className = "__input_wrapper">
                { ( arrayStates.length <= 0 ) 
                    && <LoadingInComponent textLoading = {'Espere un momento, estamos cargando los estados...'} />
                }
                {
                    ( arrayStates.length > 0 )
                        &&  <InputSelect
                                onChange = { handdleInputChange }
                                name = { 'state' } 
                                arrayData = { arrayStates } 
                                textDefault = {'Selecciona tu estado'}
                                keyName = {'state'} 
                            />
                }
            </div>
            <div className = "__input_wrapper">
                { 
                    ( arrayCountries.length > 0 ) 
                        ? <InputSelect
                                onChange = { handdleInputChange }
                                name = { 'country' } 
                                arrayData = { arrayCountries } 
                                textDefault = {'Selecciona tu municipio'}
                                keyName = {'contry'} 
                            />
                        : <LoadingInComponent textLoading = 'Cargando municipios...' />
                }
            </div>
            <WrapperButtonsRegister actualStep = { stateProgress.actualStep } formData ={inputFormValues}/>
        </div>
    )
}
