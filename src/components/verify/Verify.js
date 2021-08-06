import React, { useRef } from 'react'
import { useValidateCode } from '../../hooks/useValidateCode';
import { LoadingInComponent } from '../loadings/LoadingInComponent'
export const Verify = () => {

    const c1 = useRef( null );
    const c2 = useRef( null );
    const c3 = useRef( null );

    const [codes, handdleInputChange, verifyCode,isLoading ] = useValidateCode( c1, c2, c3 );

    return (
        <form>
            <div>
            <input
                ref = {c1} 
                onChange={ handdleInputChange } 
                className ="__input_code" 
                type="text" 
                name="c1" 
                placeholder ="Code" 
                value = { codes.c1}/>
            <input
                ref = {c2}  
                onChange={ handdleInputChange } 
                className ="__input_code" 
                type="text" 
                name="c2" 
                placeholder ="Code" 
                value = {codes.c2}/>
            <input 
                ref = {c3} 
                onChange={ handdleInputChange } 
                className ="__input_code" 
                type="text" 
                name="c3" 
                placeholder ="Code" 
                value = {codes.c3}/>
            </div>
            <button 
                onClick = { verifyCode } 
                className="__btn"
                disabled = { isLoading }>
                    { isLoading 
                        ? <LoadingInComponent />
                        :<p>Verificar cuenta</p>
                    }
            </button>
        </form>
    )
}
