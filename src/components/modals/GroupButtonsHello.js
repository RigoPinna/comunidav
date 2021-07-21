import React from 'react'
import { useLoadingButton } from '../../hooks/useLoadingButton';
import { IconArrowRight } from '../iconos/IconArrowRight';
import { LoadingInComponent } from '../loadings/LoadingInComponent';

export const GroupButtonsHello = ({ setStateSuscription }) => {
    const [ isLoading, setLoading ] = useLoadingButton();
    const hanldeSuscribe = () => {
        setLoading( !isLoading )
        setStateSuscription( false );
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
