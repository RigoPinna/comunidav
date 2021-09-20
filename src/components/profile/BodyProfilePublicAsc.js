import React, { useState } from 'react'
import { EventsUser } from '../events&publications/EventsUser'
import { WrapperFeed } from '../events&publications/WrapperFeed'
import { ContainerInfoProfile } from '../Items/ContainerInfoProfile'
import { MapAssociation } from '../map/MapAssociation'

export const BodyProfilePublicAsc = ({ userData }) => {
    const [ options, setOptions ] = useState({ events:true, ubication:false });
    return (
        <>
            <ContainerInfoProfile { ...userData } isMyProfile ={ false } options={options} setOptions={setOptions} />
            <WrapperFeed>
                {
                    options.events && <EventsUser  uid={ userData.uid } />
                }
                {
                    ( options.ubication ) && <MapAssociation lat = {userData.lat} lng = { userData.lng } displayName={userData.displayName}/>
                }
            </WrapperFeed>
            
        </>
    )
}
