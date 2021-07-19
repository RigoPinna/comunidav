import React from 'react'

import { ItemUser } from '../Items/ItemUser'
import { SubMenuEventPublic } from '../menus/SubMenuEventPublic'
import { ImageEvent } from '../events&publications/ImageEvent'
import { ButtonSuscribeEvent } from '../events&publications/ButtonSuscribeEvent'
import { ButtonSendMessage } from '../inbox/ButtonSendMessage'
import { Modal } from '../modals/ModalViewImage'

export const EventOrPublication = () => {
    return (
        <>
        <div className = '__wrapper_feed_publications'>
            <div className = "__wrapper_publication_and_event">
                <SubMenuEventPublic />
                <div className = "__wrapper_publication_and_event_header">
                    <ItemUser />
                </div>
                <div className = "__wrapper_publication_and_event_body">
                    <h3>Titulo del evento</h3>
                    <p>Este evento inicia el <time>10/10/2021 • 12:00</time></p>
                    <ImageEvent />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                    <p><strong>Ubicación • </strong></p>
                </div>
                <div className="__wrapper_publication_and_event_footer">
                    <ButtonSuscribeEvent />
                    <ButtonSendMessage text = { "Enviar mensaje" }/>
                </div>
            </div>
        </div>
    </>
    )
}
