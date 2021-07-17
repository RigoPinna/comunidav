import React from 'react'
import { Link } from 'react-router-dom';
import { useGetInfoUserLoged } from '../hooks/useGetInfoUserLoged';
import { ContentAsociationsFromRegion } from './ContentAsociationsFromRegion';
import { FooterPage } from './FooterPage';
import { IconConfig } from './iconos/IconConfig';
import { InfoAndTools } from './InfoAndTools';
import { ItemUser } from './Items/ItemUser';

export const ColumnRight = () => {
    const [ userDateLoged ] = useGetInfoUserLoged();
    return (
        <div className="__wrapper_column_right">
            <div className="__wrapper_comunm_right_title_section">
                <h5>Mi perfil • </h5>
                <Link className = "btn_config" to ="/configuration">
                <IconConfig />
                </Link>
            </div>
            <hr/>
            <ItemUser {...userDateLoged} />
            <div className="__wrapper_comunm_right_title_section">
                <h5>Asociaciones en {userDateLoged.cityName}</h5>
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
