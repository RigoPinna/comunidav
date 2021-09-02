import React from 'react'
import { Link } from 'react-router-dom';
import { IconArrowRight } from '../iconos/IconArrowRight';
import { Avatar } from '../Items/Avatar';

export const ItemGroup = ({ nameEvent = 'Name Event', nameCreator = 'Name Creator Event', imageCreator, participants = [], eid }) => {
    return (
        <div className="__wrapper_item_group animate__animated animate__fadeIn">
            <div className = '__wrapper_group_event '>
                <h1>{ nameEvent }</h1>
                <div className = '__wrapper_group_event_body'>
                    <Avatar image = { imageCreator } name = { nameCreator }/>
                    <div>
                        <p>Creado por:</p>
                        <p>{ nameCreator }</p>   
                        <Link to = {`/event?query=${eid}`} className="__btn __btn_oval">
                            <p>Ir ahora</p>
                            <IconArrowRight />
                        </Link>
                    </div>
                </div>
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
            </div>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9EV6ww-i3DSr2UyyFwFna5fmfIBADKFVbLg&usqp=CAU"} alt="illustration-event"/>
        </div>
    )
}
