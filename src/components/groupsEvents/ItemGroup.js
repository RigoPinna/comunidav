import React from 'react'
import { Link } from 'react-router-dom';
import { IconArrowRight } from '../iconos/IconArrowRight';
import { Avatar } from '../Items/Avatar';

export const ItemGroup = ({eid, nameEvent, description, ubication, image, creator, participants }) => {
    return (
        <div className="__wrapper_item_group animate__animated animate__fadeIn">
            <div className = '__wrapper_group_event '>
                <h1>{ nameEvent }</h1>
                <div className = '__wrapper_group_event_body'>
                    <Avatar image = { creator.image} name = { creator.displayName }/>
                    <div>
                        <p>Creado por:</p>
                        <p>{ creator.displayName }</p> 
                        <div className="__wrapper_group_event_footer">
                    <p>{ participants.length } participante(s):</p>
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
                </div>  
                        <Link to = {`/event?query=${eid}`} className="__btn __btn_oval">
                            <p>Ir ahora</p>
                            <IconArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
            {
                image && <img src={image } alt={ nameEvent }/>
            }
        </div>
    )
}
