import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { registerToGroup } from '../../reducers/groupsEventReducer';
import { IconArrowRight } from '../iconos/IconArrowRight';
import { LoadingInComponent } from '../loadings/LoadingInComponent';

export const GroupButtonsHello = ({ setStateSuscription, groupData }) => {
    const { userLogedReducer, uiReducer } = useSelector( state => state )
    const dispatch = useDispatch();
    const hanldeSuscribe = () => {
        dispatch( registerToGroup( userLogedReducer, groupData, setStateSuscription ) );
        setStateSuscription( uiReducer.nextStepSuscribe )
       
    }
    return (
        <>
            <button className = "__btn __btn_cancelar">Cancelar</button>
            <button 
                onClick ={ hanldeSuscribe } 
                className = "__btn"
                disabled = { uiReducer.loadingInComponent}
            >
            { 
                uiReducer.loadingInComponent
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
