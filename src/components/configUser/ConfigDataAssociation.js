import React,{ useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'

import { useChangeForm } from '../../hooks/useChangeForm'
import { useChangeData } from '../../hooks/useChangeData'
import { Input } from '../Inputs/Input'
import { InputSelect } from '../Inputs/InputSelect';
import { fetchGetCategories } from '../../services/fetchGetCategories';
import { updateUserData } from '../../reducers/authReducer'
import { AlertInForm } from '../alerts/AlertInForm';
import { useValidateForm } from '../../hooks/useValidateForm';
import { useUpdateUserData } from '../../hooks/useUpdateUserData';
import { useSaveData } from '../../hooks/useSaveData';
import { IconCheck } from '../iconos/IconCheck';
import { LoadingInComponent } from '../loadings/LoadingInComponent';

export const ConfigDataAssociation = ( oldData )=>{
    const { displayName, cid, description } = oldData;
    const [ isSaved, setIsSaved ] = useSaveData();
    const [ inputFormValues, handdleInputChange ]= useChangeForm({ associationName:displayName, category:cid, description});
    const [ isDiferent,  setIsDiferent ] = useChangeData( inputFormValues, { displayName, cid, description } );
    const [ validForm, isValid ] = useValidateForm({associationName:false, category:false, description:false}, inputFormValues)
    const [categories, setCategories] = useState([])
    const [isLoading, handleSaveData ] = useUpdateUserData( setIsDiferent, setIsSaved, isValid, inputFormValues, oldData )
    useEffect(() => {
        fetchGetCategories().then( setCategories );
    }, []);
    return (
        <>
        <div className = "animate__animated animate__bounce animate__fadeIn">
            <p>Nombre de asociación:</p>
            <Input 
                name = {'associationName'}
                inputStyle = {'__input'}
                typeInput = {'text'}
                value = { inputFormValues.associationName }
                placeholder = {'Nombre de asociación'}
                onChange = { handdleInputChange }
            />
            {
                validForm.associationName 
                    && <AlertInForm 
                            styleAlert={ '__alert_error_inForm' }
                            title = { 'Error en nombre de asociación' }
                            descriptionError = { validForm.errorassociationName }
                        />
            }
            <p>Descripción:</p>
            <Input 
                name = {'description'}
                inputStyle = {'__input'}
                typeInput = {'text'}
                value = { inputFormValues.description }
                placeholder = {'Descripción'}
                onChange = { handdleInputChange }
            />
            {
                validForm.description 
                    && <AlertInForm 
                            styleAlert={ '__alert_error_inForm' }
                            title = { 'Error la descripción' }
                            descriptionError = { validForm.errordescription }
                        />
            }
            <p>Categoria actual:</p>
            <div className="__input_wrapper">
                <InputSelect
                name = {"category"}
                value ={ 0 }
                textDefault = {"Selecciona una categoria"}
                onChange = { handdleInputChange }
                keyName = {"category"}
                arrayData = { categories }
                optionDefault = { inputFormValues.category }

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
            {
                isDiferent 
                    &&  <button 
                            disabled = { isLoading} 
                            onClick = { handleSaveData } 
                            className="__btn ">
                                {
                                    isLoading 
                                        ? <LoadingInComponent />
                                        :<> <IconCheck /> <p>Guardar cambios</p></>
                                }
                            </button> 
            }
        </div>
        {
            isSaved 
            && <div className = "__wrapper_saved animate__animated animate__bounce animate__fadeOut animate__delay-4s">
                    <h4>Se han guardado los cambios correctamente</h4>
                    <IconCheck />
                </div>
        }
        </>
    )
}