import React, { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '../../reducers/authReducer';
import { DraggableMarker } from './MarkerLocation';
export const MapConfigLocation = ({ lat, lng }) => {
    const { userLogedReducer }= useSelector(state => state)
    const dispatch = useDispatch();
    const [ position, setPosition ] = useState(null);
    useEffect(() => {
        if ( !!lat && !!lng  ) {
            setPosition({ lat, lng });

        } else {
            if ( navigator.geolocation ) {
                navigator.geolocation.getCurrentPosition(( position ) =>{
                        setPosition({
                            lat:position.coords.latitude,
                            lng:position.coords.longitude 
                        })
                    },
                    ( error )=>{ console.log( error ); },
                    { enableHighAccuracy:true }
                );
            }
        }
    }, [lat, lng, setPosition]);
    const hanldeSaveUbication = e => {
        e.preventDefault();
        if ( !!position ) {
            dispatch( updateUserData(
                {viewUbication: true, lat:position.lat, lng:position.lng }, 
                userLogedReducer
            ));
        }

    }
    return (
        <>
            <div className="mapComunidav animate__animated animate__fadeIn">
                {
                    !!position 
                            && <MapContainer center={position} zoom={16} scrollWheelZoom={true}>
                                    <TileLayer
                                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <DraggableMarker position={position} setPosition={ setPosition } />
                                </MapContainer>
                }
            </div>
            <button 
                className="__btn" 
                onClick={ hanldeSaveUbication }>
                    Guardar
            </button>
       </>
   )
}