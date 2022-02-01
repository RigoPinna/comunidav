import React from 'react'
import ReactTooltip from 'react-tooltip';
import { useActionsEvents } from '../../hooks/useActionsEvents';
import { ItemParticipant } from './ItemParticipant';

export const Participants = ({ participants, eid }) => {
    const { hanldeViewList } = useActionsEvents({ participants, eid });
    return (
        <div className="__wrapper_list_avatars">
            <p>Participante(s):</p>
            {
                participants.map(( usr, i ) => ( i < 5 ) && <ItemParticipant key ={`evt-prt-${usr.uid}`} {...usr}/>)
            }
            {
                participants.length > 5 &&  <span onClick={ hanldeViewList }>+{participants.length - 5}</span>
            }
            <ReactTooltip 
                id={'prt'}
                getContent={ (dataTip) => <p style={{color:"#FFF"}}>{ dataTip }</p> }
                effect='solid'
                delayHide={500}
                delayShow={100}
                delayUpdate={500}
            />
    </div>
    )
}
