import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import { GroupButtonsHello } from './GroupButtonsHello'
import { GroupButtonsWelcome } from './GroupButtonsWelcome'
import { SuscribeHello } from './SuscribeHello'
import { SuscribeWelcome } from './SuscribeWelcome'
import { WrapperModalsOrAlerts } from './WrapperModalsOrAlerts'

export const ModalSuscribeEvent = React.memo(() => {
    const { uiReducer, userLogedReducer } = useSelector( state => state );
    const { eid, evtName, group } = uiReducer;
    const { displayName } = userLogedReducer;
    const [ stateSuscription, setStateSuscription ] = useState( true );
    return (
        <WrapperModalsOrAlerts>
                <h1>{ stateSuscription ? 'Inscripción' : '¡Inscrito al evento!'}<span></span></h1>   
                <div className = "__modal_body">
                    
                { stateSuscription 
                        ? <SuscribeHello userName = {displayName} evtName = {evtName } />
                        : <SuscribeWelcome evtID = {eid} />
                    }
                </div>
                <div className = "__modal_footer">
                    { stateSuscription 
                        ? <GroupButtonsHello setStateSuscription = { setStateSuscription } groupData = { group }/>
                        : <GroupButtonsWelcome />
                    }
                    
                </div>
        </WrapperModalsOrAlerts>
    )
});
