import React from 'react'
import { Link } from 'react-router-dom';
import { ImageEvent } from '../events&publications/ImageEvent';
import { ItemInfoFav } from '../favoriteAsc/ItemInfoFav';
import { IconArrowRight } from '../iconos/IconArrowRight';
import { IconDescription } from '../iconos/IconDescription';
import { IconLocation } from '../iconos/IconLocation';
import { Avatar } from '../Items/Avatar';
import { ItemUser } from '../Items/ItemUser';

export const ItemGroup = ({eid, nameEvent,date, hour, image, description, ubication, creator, participants }) => {
    return (
        <div className = "__wrapper_publication_and_event animate__animated animate__fadeIn">
            <div className = "__wrapper_publication_and_event_header">
                <ItemUser 
                    typeUser = {'ASC'} 
                    image = { creator.image }
                    displayName = { creator.displayName }
                    textSecondary = { `Creador del evento` }

                />
            </div>
            <div className = "__wrapper_publication_and_event_body">
                <h3>{nameEvent}</h3>
                <p>Este evento inicia el <time>{date} {hour}</time></p>
                { 
                    !!image  && <ImageEvent image = { image } title = { nameEvent } />
                }
                <p>{!!description ? description : 'Este evento no tiene descripción.'}</p>
                <ItemInfoFav info = { ubication } Icon = {IconLocation} colorIcon = {'#77A7FF'} />
                <p>Participantes registrados:</p>
                <div className="__wrapper_list_avatars">
                    {
                        participants.map(( user, i ) => {
                            return (
                                ( i < 5 ) 
                                    && <Avatar 
                                            key={`prsid-${ Date.now() }-${user.uid}`} 
                                            image = { user.image } 
                                            name = { user.displayName } 
                                        />
                            );
                        })
                    }
                    <span>+{participants.length}</span>
                </div>
            </div>
        </div>
    )
}
