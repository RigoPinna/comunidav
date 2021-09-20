import React from 'react'
import { useDataPublic } from '../../hooks/useDataPublic';
import { ProfileScreenLoading } from '../loadings/ProfileScreenLoading';
import { BodyProfilePublicAsc } from './BodyProfilePublicAsc';

export const PublicProfileAsc = () => {
   const [stateSearch, userData, STATE_SEARCH_USER ] = useDataPublic();
    return (
        <>
            {
                ( stateSearch === STATE_SEARCH_USER.loading ) && <ProfileScreenLoading />
            }
            {
                ( stateSearch === STATE_SEARCH_USER.error404 ) && <p>No existe asociación...</p>
            }
            {
                !!userData && <BodyProfilePublicAsc userData = { userData }/>
            }
        </>
    )
}
