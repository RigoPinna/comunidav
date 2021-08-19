import React, { useContext, useEffect, useState } from 'react'
import { useChangeForm } from '../../hooks/useChangeForm';
import { useIsMounted } from '../../hooks/useIsMounted';
import { fetchGetCategories } from '../../services/fetchGetCategories';
import { AlertInForm } from '../alerts/AlertInForm';
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

    const [ validForm, setValidForm ] = useState({ associationName: false, description: false, category: false })
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
            {
                    validForm.associationName 
                        && <AlertInForm 
                                styleAlert={ '__alert_error_inForm' }
                                title = { 'Error en nombre de asociación' }
                                descriptionError = { validForm.errorassociationName }
                            />
                }
            <Input
                name = { 'description' }
                onChange = { handdleInputChange }
                typeInput = {'text'}
                inputStyle = {'__input'}
                value  = { inputFormValues.description }
                placeholder = {'Ingresa una descripción para tu asociaión'}
            />
            {
                validForm.description 
                    && <AlertInForm 
                            styleAlert={ '__alert_error_inForm' }
                            title = { 'Error la descripción' }
                            descriptionError = { validForm.errordescription }
                        />
            }
            <div className="__input_wrapper">
                <InputSelect
                    onChange = { handdleInputChange }
                    name = { 'category' }
                    arrayData = { arrayCategories }
                    textDefault = {'Selecciona tu categoria'}
                    optionDefault = { inputFormValues.category}
                />

            </div>
            {
                validForm.category 
                    && <AlertInForm 
                            styleAlert={ '__alert_error_inForm' }
                            title = { 'Error en elegir la categoria' }
                            descriptionError = { validForm.errorcategory }
                        />
            }
            <WrapperButtonsRegister 
                actualStep = { stateProgress.actualStep } 
                formData = {inputFormValues} 
                validForm = { validForm }
                setValidForm = { setValidForm }
            />
        </div>
    )
}
