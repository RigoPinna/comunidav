import React from 'react'
import { SubMenuEventPublic } from '../menus/SubMenuEventPublic'
import { ItemUserLoading } from './ItemUserLoading'

export const EventLoading = () => {
    return (
        <>
         <div className = '__wrapper_feed_publications'>
            <div className = "__wrapper_publication_and_event _item_loading ">
                <div className = "__wrapper_publication_and_event_header">
                    <ItemUserLoading />
                </div>
                <div className = "__wrapper_publication_and_event_body">
                    <div className = "__loding_text_long"></div>
                    <div className = "__loading_image"></div>
                    <div className = "__loding_text_short"></div>
                </div>
            </div>
        </div>
            
        </>
    )
}
