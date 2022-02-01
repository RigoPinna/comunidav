import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IconEmptyPublications } from '../../iconos/IconEmptyPublications';
import { DoPublicationHeader } from '../../Items/DoPublicationHeader'
import { ItemPublication } from '../publications/ItemPublication';
import { WrapperFeed } from '../WrapperFeed';
import { CreatePublication } from './CreatePublication';
export const EventBody = () => {
    const [publications, setPublications] = useState([])
    const { userLogedReducer, groupVisitReducer } = useSelector( state => state );
    const { displayName, category, image, typeUser } = userLogedReducer;
    useEffect(() => {
        setPublications( groupVisitReducer.publications )
    }, [ groupVisitReducer ])

    return (
        <>
        <div className="__wrapper_group_feed">
            <DoPublicationHeader 
                displayName={ displayName} 
                textSecondary={!!category ? category : 'Participante'} 
                image={ image }
                typeUser= {typeUser}
                title="Comparte tu experiencia en el evento o simplemente has una pregunta."
                ComponentCreatePublication = {  CreatePublication }/>
        </div>
        <h3>Publicaciones</h3>
        <WrapperFeed>
            {
                
                publications.length > 0 
                    ? publications.map( pbl => <ItemPublication key={`pbl-${pbl.pid}`} {...pbl} eid = { groupVisitReducer.eid }/>)
                    : <IconEmptyPublications />
            }
        </WrapperFeed>
        </>
    )
}
