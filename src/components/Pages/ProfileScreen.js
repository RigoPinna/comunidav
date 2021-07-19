import React from 'react'

import { useGetInfoUserLoged } from '../../hooks/useGetInfoUserLoged';
import { ButtonBackPage } from '../ButtonBackPage';
import { ProfileScreenLoading } from '../loadings/ProfileScreenLoading';
import { ProfileAsc } from '../UserAsc/ProfileAsc';

export const ProfileScreen = ( { history } ) => {

    const [ userDataLoged ] = useGetInfoUserLoged();
    if( userDataLoged === {} || userDataLoged.uid === undefined) {
       return (
        <section>
            <h1>Mi perfil</h1>
            <ProfileScreenLoading />  
        </section>
       )
    }
    
    return (
        <section>
            <div className="__title_pages"> <ButtonBackPage history={ history } /> <h1>Mi perfil</h1></div>
           {
               userDataLoged.typeUser === 'ASC'
                && <ProfileAsc {...userDataLoged } />
                
           }
        </section>
    )
}
