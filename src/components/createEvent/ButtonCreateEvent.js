import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { paseDate } from '../../helpers/paseDate';
import { useValidateForm } from '../../hooks/useValidateForm';
import { createEvent } from '../../reducers/myEventsReducer';
import { closeAlert, openAlert } from '../../reducers/uiReducer';
import { LoadingInComponent } from '../loadings/LoadingInComponent'
export const ButtonCreateEvent = ({ valuesForm, imageFile, dateInit,validation, setValidation, imageURL }) => {
    const dispatch = useDispatch();
    const { userLogedReducer, uiReducer } = useSelector( state => state );
    const  [ OBJ_VALIDATE_TEMPORALLY, isValid ] = useValidateForm(validation,{...valuesForm, ...{ dateInit, image:imageFile }})
    const history = useHistory();
    const hanadleCreateEvent = e => {
        e.preventDefault();
        if ( isValid ) {
            const data = parseDataEvent();
            dispatch( createEvent( userLogedReducer, data ) );
            dispatch( openAlert('Evento publicado','Se ha publicado tu evento correctamente.',goProfile) );
        } else {
            setValidation( OBJ_VALIDATE_TEMPORALLY );
        }
    }
    function goProfile() {
        dispatch( closeAlert() );
        history.goBack();

    }
    function parseDataEvent (){
        const { date: DInit, hour: HInit } = paseDate( dateInit )
        return {
            ...valuesForm, 
            ...{ dateInit:DInit, hourInit:HInit,image:imageFile, imageURL } 
        }
    }
    return (
        <button 
            disabled = { uiReducer.loadingInComponent } 
            onClick={ hanadleCreateEvent } className="__btn">
               {
                    uiReducer.loadingInComponent 
                        ? <LoadingInComponent />
                        : 'Crear evento'
               }
        </button>
    )
}
