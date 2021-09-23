import React from 'react'
import { useSelector } from 'react-redux'
import { DoPublicationHeader } from '../../Items/DoPublicationHeader'
import { ItemPublication } from '../publications/ItemPublication';
import { WrapperFeed } from '../WrapperFeed';
import { CreatePublication } from './CreatePublication';
export const EventBody = ({ publications }) => {
    const { uid, displayName, category, image } = useSelector( state => state.userLogedReducer );
    return (
        <>
        <div className="__wrapper_group_feed">
            <DoPublicationHeader 
                displayName={ displayName} 
                textSecondary={category} 
                image={ image } 
                title="Comparte tu experiencia en el evento o simplemente has una pregunta."
                ComponentCreatePublication = {  CreatePublication }/>
        </div>
        <h3>Publicaciones</h3>
        <WrapperFeed>
            {
                publications.map( pbl => <ItemPublication {...pbl} />)
            }
        </WrapperFeed>
        </>
    )
}
