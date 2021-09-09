import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModalListParticipants } from '../../reducers/uiReducer';
import { ImageEvent } from '../events&publications/ImageEvent';
import { ItemInfoFav } from '../favoriteAsc/ItemInfoFav';
import { IconArrowRight } from '../iconos/IconArrowRight';
import { IconDescription } from '../iconos/IconDescription';
import { IconLocation } from '../iconos/IconLocation';
import { Avatar } from '../Items/Avatar';
import { ItemUser } from '../Items/ItemUser';
import ReactTooltip from 'react-tooltip';

export const ItemGroup = ({eid, nameEvent,date, hour, image, description, ubication, creator, participants }) => {
    const dispatch = useDispatch()
    const hanldeViewListParticipants = e => dispatch( openModalListParticipants( participants, creator ) );
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
                                && <div key={`prsid-${ Date.now() }-${user.uid}`}  data-for={'prt'} data-tip={!!user.nameAsc ? user.nameAsc : `${ user.name } ${ user.lastName }`}>
                                    <Avatar 
                                        
                                        image = { user.image } 
                                        name = { user.displayName } 
                                    />
                                </div>
                            );
                        })
                    }
                    {
                        participants.length >= 5 &&  <span onClick={ hanldeViewListParticipants }>+{participants.length - 5}</span>
                    }
                    <ReactTooltip 
                        id={'prt'}
                        getContent={(dataTip) =><p style={{color:"#FFF"}}>{ dataTip }</p>}
                        effect='solid'
                        delayHide={500}
                        delayShow={500}
                        delayUpdate={500}
                    />
                    
                </div>
            </div>
        </div>
    )
}
