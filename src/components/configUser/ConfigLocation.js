import React from 'react'
import { useChangeForm } from '../../hooks/useChangeForm';
import { useChangeEffectLocation } from '../../hooks/useChangeEffectLocation';
import { useChangeData } from '../../hooks/useChangeData';
import { InputSelect } from '../Inputs/InputSelect';

export const ConfigLocation = ({ idState, idMun }) => {
    const [ inputFormValues,  handdleInputChange ] = useChangeForm({ state:idState, country:idMun });
    const [arrayStates, arrayCountries] = useChangeEffectLocation( inputFormValues );
    const [ isDiferent ] = useChangeData( inputFormValues, { idState, idMun } );
    return (
        <div className ="animate__animated animate__bounce animate__fadeIn">
            <p>Estado actual selecionado:</p>
            <div className ="__input_wrapper">
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
            <p>Municipio actual selecionado:</p>
            <div className ="__input_wrapper">
            <InputSelect
                        onChange = { handdleInputChange }
                        name = { 'country' } 
                        arrayData = { arrayCountries } 
                        textDefault = {'Selecciona tu municipio'}
                        keyName = {'country'}
                        optionDefault = { inputFormValues.country } 
                    />
            </div>
            {
                isDiferent &&  <button className="__btn ">Guardar</button> 
            }
        </div>
    )
}
