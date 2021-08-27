import React, { useEffect,useState } from 'react'
import { useSelector } from 'react-redux';
import { IllustrationEmpty } from '../iconos/IllustrationEmpty';
import { LoadingInComponent } from '../loadings/LoadingInComponent';
import { ItemGroup } from './ItemGroup'
const statusMountedGroups = {
    loading: undefined,
    empty: [],
}
export const GroupsEvents = () => {
    const { groupsReducer } = useSelector( state => state );
    const [ groups, setGroups ] = useState( statusMountedGroups.loading );
    useEffect( () => {

        setGroups( groupsReducer.length > 0 ? groupsReducer : statusMountedGroups.empty );

    }, [ groupsReducer ])
    return (
        <>
            {
                groups === statusMountedGroups.loading
                    ? <LoadingInComponent textLoading ={"Cargando grupos..."} />
                    : ( groups === statusMountedGroups.empty ) 
                        ? <IllustrationEmpty message ={"No te has inscrito a algun evento"}/>
                        : groups.map( group => <ItemGroup key = {`gid-${ group.eid }`} {...group}/> )
            }
        </>
    )
}
