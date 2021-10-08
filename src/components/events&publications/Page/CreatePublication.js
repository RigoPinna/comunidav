import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useChangeForm } from '../../../hooks/useChangeForm'
import { addPublication } from '../../../reducers/groupVisit';

export const CreatePublication = () => {
    const dispatch = useDispatch()
    const { eid } = useSelector( state => state.groupVisitReducer )
    const [ values, handdleChange,, hanldeResetValues ] = useChangeForm({desc:''});
    const hanldePostPublication = e => {
        e.preventDefault();
        ( values.desc.trim() !== '') && dispatch( addPublication( eid, values.desc ) )
        hanldeResetValues()

    }

    return (
        <form>
            <textarea 
                name="desc"
                onChange = { handdleChange } 
                value={ values.desc } 
                placeholder="Escribir..." />
            <button
                onClick = { hanldePostPublication } 
                disabled={ values.desc.trim() === ''} 
                className="__btn">
                    Publicar
            </button>
        </form>
    )
}
