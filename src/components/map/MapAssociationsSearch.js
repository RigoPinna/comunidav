import { useEffect, useState } from "react"
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";

export const MapAssociationsSearch = ({ associations }) => {
    const [ myPosition, setMyPosition ] = useState(null);
    const [ initPosition, setInitPosition ] = useState(null)
    useEffect(() => {
        if ( navigator.geolocation ) {
            navigator.geolocation.getCurrentPosition(( position ) =>{
                    const ptn ={
                        lat:position.coords.latitude,
                        lng:position.coords.longitude 
                    }
                    setMyPosition(ptn)
                    setInitPosition(ptn)
                },
                ( error )=>{ console.log( error ); },
                { enableHighAccuracy:true }
            );
        } else {
            for( let asc of associations ) {
                if( asc.viewUbication ) {
                    setInitPosition({
                        lat:asc.lat,
                        lng:asc.lng 
                    })
                    return;
                }
            }
        }
    }, [])
    return (
        <div className="mapComunidav">
            <div className="__wrapper_map_asc animate__animated animate__fadeIn">
                    {
                        !!initPosition 
                            && <MapContainer center={initPosition} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                                {
                                    !!myPosition 
                                        && <Marker position={myPosition}>
                                                <Popup>Yo</Popup>
                                                <Tooltip direction="bottom" offset={[0, 0]} opacity={1} permanent>Yo</Tooltip>
                                            </Marker>
                                }
                            {
                                !!associations && associations.map(({lat, lng, viewUbication, displayName }, i) =>{
                                    return (
                                        viewUbication 
                                            && <Marker key={`${displayName}-${i}`} position={{ lat, lng }}>
                                                    <Popup>{ displayName }</Popup>
                                                    <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>{ displayName }</Tooltip>
                                                </Marker>
                                    );
                                })
                            }
                        </MapContainer>
                    }
            </div>
        </div>
    )
}