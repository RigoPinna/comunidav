import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../reducers/authReducer';
import { InputSwitch } from '../Inputs/InputSwitch';
import { MapConfigLocation } from '../map/MapConfigLocation';
import { InputsLocation } from './InputsLocation';

export const ConfigLocation = ({ nameMun, nameState, landName, viewUbication, lat, lng, typeUser,idMun, idState, lid }) => {
    const { userLogedReducer }= useSelector(state => state)
    const dispatch = useDispatch();
    const [ switchValue, setSwitchValue ] = useState({configLocation: false, geoLocation:viewUbication });
    useEffect(() => {
        console.log(!switchValue.geoLocation)
        if( !switchValue.geoLocation ) {
            ( viewUbication ) && dispatch( updateUserData({viewUbication: false, lat, lng }, userLogedReducer));
            setSwitchValue({...switchValue,geoLocation: false })
        }
    }, [ switchValue.geoLocation ])
    return (
        <div className ="animate__animated animate__bounce animate__fadeIn">
            <p>Ubicación actual: <strong>{`${ nameMun }, ${ nameState } ${ landName }`}</strong></p>
            <InputSwitch
                checked = { switchValue.configLocation } 
                text={"Restablecer ubicación"} 
                hanldeActive={ ()=> setSwitchValue({...switchValue,configLocation: !switchValue.configLocation })}
                idSwitch={"configLocation"}/>
            {
                switchValue.configLocation && <InputsLocation idMun={idMun} idState = {idState} lid={lid} />
            }
            {
                typeUser === 'ASC' 
                    && <> 
                        <InputSwitch 
                            checked = { switchValue.geoLocation }
                            text={"Establecer ubicación en el mapa para mi asociación"}
                            hanldeActive={()=> setSwitchValue({...switchValue,geoLocation: !switchValue.geoLocation })}
                            idSwitch={"geoLocation"}/>
                        {
                            switchValue.geoLocation 
                                && <> 
                                <p>Arrastra el marcador si la posición no es correcta</p>
                                <MapConfigLocation lat={lat} lng={lng} />
                                </>
                        }
                    </>
            }
            
            
        </div>
    )
}
