import React from 'react'
import { useSelector } from 'react-redux';
import { useToggleFavorite } from '../../hooks/useToggleFavorite';
import { IconAssociation } from '../iconos/IconAssociation';
import { IconFavorite } from '../iconos/IconFavorite';
import { IconGroups } from '../iconos/IconGroups';
import { LoadingInComponent } from '../loadings/LoadingInComponent';

export const ContentMenuNotIsMyEvent = ( dataCreator ) => {
    const { uiReducer, userLogedReducer } = useSelector( state => state );
    const  { isFavorite, hanldeToggleActionButton } = useToggleFavorite( dataCreator, userLogedReducer.uid );
    return (
        <ul className="__modal_submenu_event animate__animated animate__fadeIn animate__faster">
        <li>
             <button
                 disabled = { uiReducer.loadingInComponent } 
                 onClick = { hanldeToggleActionButton } 
                 className = "__btn">
                     {
                         uiReducer.loadingInComponent
                            ? <LoadingInComponent />
                            : <>
                                <IconFavorite />
                                <p>{ isFavorite ? "Eliminar de mis favoritos": 'Agregar a mis favoritos'} </p> 
                            </>
                     }
                   
             </button>
         </li>
         <li>
             <button className = "__btn">
                 <IconAssociation />
                 <p>Visitar asociación</p>
             </button>
         </li>
         <li>
             <button
                className = "__btn">
                 <IconGroups />
                 <p>Visitar grupo</p>
             </button>
         </li>
        
         
     </ul>
    )
}
