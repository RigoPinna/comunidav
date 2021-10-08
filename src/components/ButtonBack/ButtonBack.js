import React from 'react'
import { useHistory } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import { IconArrowLeft } from '../iconos/IconArrowLeft'

export const ButtonBack = () => {
    const history = useHistory();
    const hanldeGoBack = e => {
        e.preventDefault();
        history.goBack()
    }
    return (
        <>
            {
                ( history.length >= 1 )
                    && <>
                    <button
                        id="btn-back"
                        data-for = "btn-back"  
                        data-tip = "Volver"
                        onClick={ hanldeGoBack } 
                        className = "__btn __btn_back">
                        <IconArrowLeft />
                    </button>
                    <ReactTooltip  id='btn-back' type="dark" effect='solid'/>
                </>
            }
            
        </>
    )
}
