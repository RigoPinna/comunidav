
import React from 'react'
import { Link, Redirect } from 'react-router-dom';

import { useGetInfoUserLoged } from '../hooks/useGetInfoUserLoged';
import { ContentAsociationsFromRegion } from './ContentAsociationsFromRegion';
import { ItemUser } from './Items/ItemUser';
import { IconConfig } from './iconos/IconConfig';
import { InfoAndTools } from './InfoAndTools';
import { FooterPage } from './FooterPage';


export const ColumnRight = ({history }) => {

    const [ userDataLoged ] = useGetInfoUserLoged();
    const handleGoMyProfile = () => {
        history.push( '/profile' );
    }
    return (
        <div className="__wrapper_column_right">
            <div className="__wrapper_comunm_right_title_section">
                <h5>Mi perfil • </h5>
                <Link className = "btn_config" to ="/configuration">
                    <IconConfig />
                </Link>
            </div>
            <hr/>
            <ItemUser 
                handle = { () => { handleGoMyProfile() } }
                displayName = { userDataLoged.displayName } 
                textSecondary = { userDataLoged.category }
                image = { userDataLoged.image }
            />
            <div className="__wrapper_comunm_right_title_section">
                <h5>Asociaciones en {userDataLoged.cityName}</h5>
            </div>
            <hr/>
            <ContentAsociationsFromRegion/>
            <div className="__wrapper_comunm_right_title_section">
                <h5>Información y herramientas</h5>
            </div>
            <hr/>
            <InfoAndTools />
            <div className="__wrapper_comunm_right_title_section">
               
            </div>
            <FooterPage />
           
        </div>
    )
}
