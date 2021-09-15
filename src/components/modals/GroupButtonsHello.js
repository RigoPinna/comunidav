import React from 'react'
import { useDispatch } from 'react-redux';
import { useLoadingButton } from '../../hooks/useLoadingButton';
import { addConffetti } from '../../reducers/uiReducer';
import { IconArrowRight } from '../iconos/IconArrowRight';
import { LoadingInComponent } from '../loadings/LoadingInComponent';

export const GroupButtonsHello = ({ setStateSuscription }) => {
    const [ isLoading, setLoading ] = useLoadingButton();
    const dispatch = useDispatch();
    const hanldeSuscribe = () => {
        setLoading( !isLoading )
        setStateSuscription( false );
        dispatch( addConffetti(true) );
    }
    return (
        <>
            <button className = "__btn __btn_cancelar">Cancelar</button>
            <button 
                onClick ={ hanldeSuscribe } 
                className = "__btn"
                disabled = { isLoading }
            >
            { 
                isLoading
                    ? <LoadingInComponent />
                    : (<>
                        <p>Inscribirme</p>
                        <IconArrowRight />
                    </>) 
            }
                            
            </button>
            
        </>
    )
}
