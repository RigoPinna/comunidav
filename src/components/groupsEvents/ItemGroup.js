import React from 'react'
import { Link } from 'react-router-dom';
import { IconArrowRight } from '../iconos/IconArrowRight';
import { Avatar } from '../Items/Avatar';

export const ItemGroup = ({ nameEvent = 'Name Event', nameCreator = 'Name Creator Event', imageCreator, participants = [], eid }) => {
    return (
        <div className = '__wrapper_group_event animate__animated animate__fadeIn'>
        <h1>{ nameEvent }</h1>
        <div className = '__wrapper_group_event_body'>
            <Avatar image = { imageCreator } name = { nameCreator }/>
            <div>
                <strong>Creado por:</strong>
                <p>{ nameCreator }</p>   
            </div>
        </div>
        <p>{ participants.length } participante(s):</p>
        <div className="__wrapper_group_event_footer">
            <div className="__wrapper_list_avatars">
                {
                    participants.map(( user, i ) => {
                        return (
                            ( i < 3 ) 
                                && <Avatar 
                                        key={`prsid-${ Date.now() }-${user.uid}`} 
                                        image = { user.image } 
                                        name = { user.displayName } 
                                    />
                        );
                    })
                }
            </div>
           <Link to = {`/event?query=${eid}`} className="__btn __btn_oval">
               <p>Ir ahora</p>
               <IconArrowRight />
           </Link>

        </div>
    </div>
    )
}
