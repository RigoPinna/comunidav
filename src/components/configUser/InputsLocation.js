import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useChangeData } from '../../hooks/useChangeData';
import { useChangeEffectLocation } from '../../hooks/useChangeEffectLocation';
import { useChangeSelect } from '../../hooks/useChangeSelect';
import { updateUserData } from '../../reducers/authReducer';
import { InputSelect } from '../Inputs/InputSelect';

export const InputsLocation = ({idMun, idState, lid}) => {
    const { userLogedReducer } = useSelector(state => state );
    const dispatch = useDispatch();
    const [ inputFormValues,  handdleInputChange ] = useChangeSelect({land:lid,state:idState, country:idMun });
    const [arrayLands, arrayStates, arrayCountries] = useChangeEffectLocation( inputFormValues );
    const [ isDiferent, setIsDiferent ] = useChangeData( inputFormValues, { land:lid,state:idState, country:idMun } );
    const handleUpdateUbications = e => {
        e.preventDefault();
        dispatch( updateUserData( inputFormValues, userLogedReducer ) );
        setIsDiferent( false );

    }
    return (
        <>
        <p>País:</p>
            <div className ="__input_wrapper">
            {

                <InputSelect
                        onChange = {  handdleInputChange }
                        name = { 'land' } 
                        arrayData = { arrayLands } 
                        textDefault = {'Selecciona tu estado'}
                        keyName = {'land'}
                        optionDefault = { inputFormValues.land } 
                    />
            }
            </div>
            <p>Estado:</p>
            <div className ="__input_wrapper">
                <InputSelect
                        onChange = {  handdleInputChange }
                        name = { 'state' } 
                        arrayData = { arrayStates } 
                        textDefault = {'Selecciona tu estado'}
                        keyName = {'state'}
                        optionDefault = { inputFormValues.state } 
                 />
            
            </div>
            <p>Municipio:</p>
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
                isDiferent &&  <button onClick = { handleUpdateUbications }  className="__btn ">Guardar</button> 
            }
            </>
    )
}
