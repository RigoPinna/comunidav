
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


import { ContentAsociationsFromRegion } from './ContentAsociationsFromRegion';
import { ItemUser } from './Items/ItemUser';
import { IconConfig } from './iconos/IconConfig';
import { InfoAndTools } from './InfoAndTools';
import { FooterPage } from './FooterPage';
import { useSelector } from 'react-redux';
import { ItemUserLoading } from './loadings/ItemUserLoading';
import { useIsMounted } from '../hooks/useIsMounted';


export const ColumnRight = ({history }) => {

    const { userLogedReducer } = useSelector( state => state );
    const uid = localStorage.getItem( 'uid' );
    const [isLoading, setIsLoading] = useState( Object.keys( userLogedReducer ) );
    const [ isMounted ] = useIsMounted();
    const handleGoMyProfile = () => {
        history.push( `/user?q=${uid}` );
    }
    useEffect(() => {
        if ( isMounted ) {
            if( isLoading ) {

                ( Object.keys( userLogedReducer ).length > 0 )
                 && setIsLoading( !isLoading)
            }
        }
    }, [ userLogedReducer, setIsLoading, isLoading, isMounted ])
    return (
        <div className="__wrapper_column_right">
            <div className="__wrapper_comunm_right_title_section">
                <h5>Mi perfil • </h5>
                { 
                    !isLoading 
                        && <Link className = "btn_config" to ="/config">
                                <IconConfig />
                            </Link>
                }
            </div>
            <hr/>
            { 
                ( !isLoading )
                    ? <ItemUser 
                        handle = { () => { handleGoMyProfile() } }
                        displayName = { userLogedReducer.displayName } 
                        textSecondary = {userLogedReducer.typeUser === 'ASC' ? `Categoria • ${userLogedReducer.category}`: userLogedReducer.userName }
                        image = { userLogedReducer.image }
                        typeUser = {userLogedReducer.typeUser}    
                    />
                    : <ItemUserLoading />
            }
            <div className="__wrapper_comunm_right_title_section">
                <h5>Asociaciones en {userLogedReducer.cityName}</h5>
            </div>
            <hr/>
            {
                !isLoading 
                    && <ContentAsociationsFromRegion userData = { userLogedReducer } historyRouter = { history }/>
            }
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
