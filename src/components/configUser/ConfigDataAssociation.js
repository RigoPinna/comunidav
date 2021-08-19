import React,{ useEffect, useState } from 'react';
import { useChangeForm } from '../../hooks/useChangeForm'
import { useChangeData } from '../../hooks/useChangeData'
import { Input } from '../Inputs/Input'
import { InputSelect } from '../Inputs/InputSelect';
import { fetchGetCategories } from '../../services/fetchGetCategories';

export const ConfigDataAssociation = ({displayName, cid, description})=>{
    const [ inputFormValues, handdleInputChange ]= useChangeForm({ associationName:displayName, category:cid, description});
    const [ isDiferent ] = useChangeData( inputFormValues, { displayName, cid, description } );
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetchGetCategories().then( resp => {
            setCategories( resp );

        })

    }, [])
    return (
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
            <p>Descripción:</p>
            <Input 
                name = {'description'}
                inputStyle = {'__input'}
                typeInput = {'text'}
                value = { inputFormValues.description }
                placeholder = {'Descripción'}
                onChange = { handdleInputChange }
            />
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
                isDiferent &&  <button className="__btn ">Guardar</button> 
            }
        </div>
    )
}