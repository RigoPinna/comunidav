import React, { useContext, useEffect, useState } from 'react'
import { useChangeForm } from '../../hooks/useChangeForm';
import { useIsMounted } from '../../hooks/useIsMounted';
import { fetchGetCategories } from '../../services/fetchGetCategories';
import { Input } from '../Inputs/Input';
import { InputSelect } from '../Inputs/InputSelect';
import { RegisterContext } from './RegisterContext';
import { WrapperButtonsRegister } from './WrapperButtonsRegister';

export const WrapperInputsDataAsc = () => {
    const { stateProgress } = useContext( RegisterContext );
    const [ isMounted ] = useIsMounted();
    const { formData } = stateProgress;
    const  [ inputFormValues, handdleInputChange ] = useChangeForm({ 
                                                        associationName:formData.associationName || '',
                                                        category:1,
                                                        description:formData.associationName || '' });
    const [ arrayCategories, setarrayCategories ] = useState([]);
    useEffect(() => {
        if ( isMounted ) {
            ( arrayCategories.length <= 0 )
                && fetchGetCategories().then ( setarrayCategories );
        }
    }, [ setarrayCategories, arrayCategories ])

    return (
        <div className="animate__animated animate__fadeIn">
            <Input
                name = { 'associationName' }
                onChange = { handdleInputChange }
                typeInput = {'text'}
                inputStyle = {'__input'}
                value  = { inputFormValues.associationName }
                placeholder = {'Nombre de tu asociación'}
            />
            <Input
                name = { 'description' }
                onChange = { handdleInputChange }
                typeInput = {'text'}
                inputStyle = {'__input'}
                value  = { inputFormValues.associationName }
                placeholder = {'Ingresa una descripción para tu asociaión'}
            />
            <div className="__input_wrapper">
                <InputSelect
                    onChange = { handdleInputChange }
                    name = { 'category' }
                    arrayData = { arrayCategories }
                    textDefault = {'Selecciona tu categoria'}
                    
                />

            </div>
            <WrapperButtonsRegister actualStep = { stateProgress.actualStep } formData = {inputFormValues} />
        </div>
    )
}
