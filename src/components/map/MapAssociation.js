import React from 'react'
import { MapContainer,TileLayer,Marker, Popup, Tooltip } from 'react-leaflet'

export const MapAssociation = ({ lat, lng, displayName }) => {
    return (
        <div className="__wrapper_map_asc animate__animated animate__fadeIn">
            <h3>Ubicación de la asociación {displayName}</h3> 
            <div className="map_asc">
                <MapContainer center={{ lat, lng }} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={{ lat, lng }}>
                    <Popup>{displayName}</Popup>
                    <Tooltip>{displayName}</Tooltip>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    )
}
