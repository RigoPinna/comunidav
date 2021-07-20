
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';


import { ContentAsociationsFromRegion } from './ContentAsociationsFromRegion';
import { ItemUser } from './Items/ItemUser';
import { IconConfig } from './iconos/IconConfig';
import { InfoAndTools } from './InfoAndTools';
import { FooterPage } from './FooterPage';
import { useSelector } from 'react-redux';


export const ColumnRight = ({history }) => {

    const { userLogedReducer } = useSelector( state => state );
    const uid = localStorage.getItem( 'uid' );
    const handleGoMyProfile = () => {
        history.push( `/association/${uid}` );
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
                displayName = { userLogedReducer.displayName } 
                textSecondary = { userLogedReducer.category }
                image = { userLogedReducer.image }
            />
            <div className="__wrapper_comunm_right_title_section">
                <h5>Asociaciones en {userLogedReducer.cityName}</h5>
            </div>
            <hr/>
            <ContentAsociationsFromRegion historyRouter = { history }/>
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
