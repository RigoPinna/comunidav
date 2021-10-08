import React from 'react'
import { useDataPublic } from '../../hooks/useDataPublic';
import { ButtonBack } from '../ButtonBack/ButtonBack';
import { Illustration404 } from '../iconos/Illustration404';
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
                ( stateSearch === STATE_SEARCH_USER.error404 ) && <Illustration404 text ="No se ha encontrado niguna asociación, lo sentimos..."/>
            }
            {
                !!userData && <BodyProfilePublicAsc userData = { userData }/>
            }
        </>
    )
}
