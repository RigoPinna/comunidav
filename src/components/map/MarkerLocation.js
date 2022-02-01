import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Marker, Popup, Tooltip } from 'react-leaflet'
export const DraggableMarker = ({ position,setPosition })=> {
    
    const [draggable, setDraggable] = useState(false)
    const markerRef = useRef(null)
    const eventHandlers = useMemo(() => ({dragend() {
          const marker = markerRef.current
          if (marker != null) {
            setPosition(marker.getLatLng())
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
            { !!position 
                && <Marker
                    draggable={true}
                    eventHandlers={eventHandlers}
                    position={position}
                    ref={markerRef}>
                    <Popup minWidth={90}>
                        Arrastra el marcador si la posición no es correcta
                    </Popup>
                </Marker>
            }
        </>
    )
  }
