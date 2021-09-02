import React from 'react'

import { useChangeEffectLocation } from '../../hooks/useChangeEffectLocation';
import { useChangeData } from '../../hooks/useChangeData';
import { InputSelect } from '../Inputs/InputSelect';
import { useChangeSelect } from '../../hooks/useChangeSelect';

export const ConfigLocation = ({ idState, idMun }) => {
    const [ inputFormValues,  handdleInputChange ] = useChangeSelect({land:1, state:idState, country:idMun });
    const [arrayLands, arrayStates, arrayCountries] = useChangeEffectLocation( inputFormValues );
    const [ isDiferent ] = useChangeData( inputFormValues, { idState, idMun } );
    return (
        <div className ="animate__animated animate__bounce animate__fadeIn">
            <p>Paìs actual selecionado:</p>
            <div className ="__input_wrapper">
            {

                <InputSelect
                        onChange = { handdleInputChange }
                        name = { 'land' } 
                        arrayData = { arrayLands } 
                        textDefault = {'Selecciona tu estado'}
                        keyName = {'land'}
                        optionDefault = { inputFormValues.land } 
                    />
            }
            </div>
            <p>Estado actual selecionado:</p>
            <div className ="__input_wrapper">
                <InputSelect
                        onChange = { handdleInputChange }
                        name = { 'state' } 
                        arrayData = { arrayStates } 
                        textDefault = {'Selecciona tu estado'}
                        keyName = {'state'}
                        optionDefault = { inputFormValues.state } 
                 />
            
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
