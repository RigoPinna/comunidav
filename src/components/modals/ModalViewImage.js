import React from 'react'
import { useSelector } from 'react-redux'
import { WrapperModalsOrAlerts } from './WrapperModalsOrAlerts';

export const ModalViewImage = () => {
    const { image, title } = useSelector( state => state.uiReducer );
    return (
        <WrapperModalsOrAlerts>
 
                {
                    !!image && <img src={ image } alt={ title } />
                }
                <div className="titleImage">
                    <p>{ title }</p>
                </div>
        </WrapperModalsOrAlerts>
    )
}
