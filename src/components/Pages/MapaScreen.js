import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { DraggableMarker } from '../map/MarkerLocation';
export const MapaScreen = () => {
    const [position, setPosition] = useState(null);
    useEffect(() => {
        if ( navigator.geolocation ) {
            navigator.geolocation.getCurrentPosition((position) =>{
                setPosition([
                    position.coords.latitude,
                    position.coords.longitude 
                ])
            },
            ( error)=>{ console.log( error ); },
            { enableHighAccuracy:true })

        }
    }, [])
    return (
       <div className={"mapComunidav"}>
           {
               !!position 
                    && <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <DraggableMarker />
                        </MapContainer>
           }
       </div>
   )
}
