import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
export const DraggableMarker = ()=> {
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState(null)
    const markerRef = useRef(null)
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
    const eventHandlers = useMemo(() => ({dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
            console.log(marker.getLatLng())
          }
        },
      }),
      [],
    )
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d)
    }, [])
  
    return (
        <>
            { !!position && <Marker
                draggable={draggable}
                eventHandlers={eventHandlers}
                position={position}
                ref={markerRef}>
                <Popup minWidth={90}>
                <span onClick={toggleDraggable} className={"markerComunidav"}>
                    {draggable
                    ? '¡Listo, arrastra el marcador a tu posición!'
                    : 'Da clic aqui para mover el marcador'}
                </span>
                </Popup>
            </Marker>
            }
        </>
    )
  }
