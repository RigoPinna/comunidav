import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useChangeForm } from '../../../hooks/useChangeForm'
import { addResponseToPublication } from '../../../reducers/groupVisit'
import { IconCheck } from '../../iconos/IconCheck'
import { Input } from '../../Inputs/Input'
import { ContentRespones } from './ContentRespones'
import { LoadingInComponent } from '../../loadings/LoadingInComponent'
import { addResponseUI } from '../../../reducers/uiReducer'

export const ResponsesPublication = ({ responses, pid, eid }) => {
    const dispatch = useDispatch();
    const { userLogedReducer, uiReducer } = useSelector( state => state );
    const { loadingInComponent, addResponse } = uiReducer;
    const { uid, displayName, image } = userLogedReducer;
    const [ resp, setResp ] = useState( responses )
    const [inputFormValues, handdleInputChange, setInputFormValues ] = useChangeForm({ response:"" });
    const hanldeAddResponse = e => {
        e.preventDefault();
        dispatch( addResponseToPublication(eid,pid,uid, inputFormValues.response) );
            const newResp = {
                uid,
                displayName,
                image,
                response: inputFormValues.response,
            }
            setResp([...resp, newResp ]);
            setInputFormValues({response:""});
        
       
    }
    return (
        <>
        <strong>{ (resp.length > 0) ?"Respuestas:" : "No hay respuestas hasta el momento:("}</strong>
        <ContentRespones resp={ resp } pid={ pid }/>
        <form action="" method="post">
            <Input
                typeInput="text"
                name="response"
                inputStyle = "__input"
                placeholder="Escribir respuesta..."
                value={ inputFormValues.response }
                onChange={ handdleInputChange }
            />
            <button
                onClick={ hanldeAddResponse }
                disabled = { inputFormValues.response.trim() ==='' || loadingInComponent } 
                className="__btn">
               {
                   loadingInComponent
                    ? <LoadingInComponent />
                    : <IconCheck />
               }
            </button>
        </form>
            
        </>
    )
}
