import React from 'react'
import { useToggleFavorite } from '../../hooks/useToggleFavorite';
import { IconAssociation } from '../iconos/IconAssociation';
import { IconFavorite } from '../iconos/IconFavorite';
import { IconGroups } from '../iconos/IconGroups';

export const ContentMenuNotIsMyEvent = ( dataCreator ) => {
    const  { isFavorite, hanldeToggleActionButton } = useToggleFavorite( dataCreator );
    return (
        <ul className="__modal_submenu_event animate__animated animate__fadeIn animate__faster">
        <li>
             <button
                 onClick = { hanldeToggleActionButton } 
                 className = "__btn">
                     <IconFavorite />
                     <p>{ isFavorite ? "Eliminar de mis favoritos": 'Agregar a mis favoritos'} </p>
             </button>
         </li>
         <li>
             <button className = "__btn">
                 <IconAssociation />
                 <p>Visitar asociación</p>
             </button>
         </li>
         <li>
             <button className = "__btn">
                 <IconGroups />
                 <p>Visitar grupo</p>
             </button>
         </li>
        
         
     </ul>
    )
}
