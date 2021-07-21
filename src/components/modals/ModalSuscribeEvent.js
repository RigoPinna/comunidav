import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { ButtonCloseModal } from './ButtonCloseModal'
import { GroupButtonsHello } from './GroupButtonsHello'
import { GroupButtonsWelcome } from './GroupButtonsWelcome'
import { SuscribeHello } from './SuscribeHello'
import { SuscribeWelcome } from './SuscribeWelcome'

export const ModalSuscribeEvent = () => {
    const { uiReducer, userLogedReducer } = useSelector( state => state );
    const { eid, evtName } = uiReducer;
    const { displayName } = userLogedReducer;
    const [ stateSuscription, setStateSuscription ] = useState( true );
    return (
        <div className="__modal_wrapper ">
            <div className ="__modal_normal animate__animated animate__fadeInUp ">
                <ButtonCloseModal />
                <h1>{ stateSuscription ? 'Inscripción' : '¡Inscrito al evento!'}<span></span></h1>   
                <div className = "__modal_body">
                    
                { stateSuscription 
                        ? <SuscribeHello userName = {displayName} evtName = {evtName } />
                        : <SuscribeWelcome evtID = {eid} />
                    }
                </div>
                <div className = "__modal_footer">
                    { stateSuscription 
                        ? <GroupButtonsHello setStateSuscription = { setStateSuscription } />
                        : <GroupButtonsWelcome />
                    }
                    
                </div>
            </div>
        </div>
    )
}
