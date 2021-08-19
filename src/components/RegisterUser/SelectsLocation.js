import React, { useContext, useState } from 'react';

import { RegisterContext } from './RegisterContext';
import { WrapperButtonsRegister } from './WrapperButtonsRegister';
import { LoadingInComponent } from '../loadings/LoadingInComponent'
import { InputSelect } from '../Inputs/InputSelect';
import { useChangeForm } from '../../hooks/useChangeForm';
import { useChangeEffectLocation } from '../../hooks/useChangeEffectLocation';
import { AlertInForm } from '../alerts/AlertInForm';
export const SelectsLocation = () => {
    const { stateProgress } = useContext( RegisterContext );
    const [ inputFormValues,  handdleInputChange ] = useChangeForm({ state:1, country:1 });
    const [arrayStates, arrayCountries] = useChangeEffectLocation( inputFormValues );
    const [validForm, setValidForm] = useState({ state:false, country:false });
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
                                optionDefault = { inputFormValues.state } 
                            />
                }
            </div>
            {
                validForm.state 
                && <AlertInForm 
                        styleAlert={'__alert_error_inForm'}
                        title = {'Error en seleccionar tu estado'}
                        descriptionError = { validForm.errorstate }
                    />
            }
            <div className = "__input_wrapper">
                <InputSelect
                                onChange = { handdleInputChange }
                                name = { 'country' } 
                                arrayData = { arrayCountries } 
                                textDefault = {'Selecciona tu municipio'}
                                keyName = {'contry'}
                                optionDefault = { inputFormValues.country }  
                            />
                
            </div>
            {
                validForm.country 
                && <AlertInForm 
                        styleAlert={'__alert_error_inForm'}
                        title = {'Error en seleccionar tu municipio'}
                        descriptionError = { validForm.errorcountry }
                    />
            }
            <WrapperButtonsRegister 
                actualStep = { stateProgress.actualStep } 
                formData ={inputFormValues}
                validForm = { validForm }
                setValidForm = { setValidForm }
            />
        </div>
    )
}
