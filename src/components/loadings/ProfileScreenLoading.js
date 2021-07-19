import React from 'react'
import { EventLoading } from './EventLoading'
import { ItemUserLoading } from './ItemUserLoading'

export const ProfileScreenLoading = () => {
    return (
        <>
        <div className = "__wrapper_info">
            <div className="__wrapper_info_header">
                <ItemUserLoading />
            </div>
        </div>
        <div className = "__wrapper_doPublication">
            <ItemUserLoading />
        </div>
        <EventLoading />
        </>
    )
}
