import React from 'react'
import { useSelector } from 'react-redux'

import { useToggleFavorite } from '../../hooks/useToggleFavorite'
import { IconAssociation } from '../iconos/IconAssociation'
import { IconTrash } from '../iconos/IconTrash'
import { LoadingInComponent } from '../loadings/LoadingInComponent'

export const SubmenuFavorite = ({ aid }) => {
    
    const { uiReducer, userLogedReducer } = useSelector( state => state );
    const  { handleRemoveFavorite } = useToggleFavorite({ aid }, userLogedReducer.uid );
    return (
        <ul className="__modal_submenu_event animate__animated animate__fadeIn">
                <li>
                    <button className = "__btn">
                        <IconAssociation />
                        <p>Visitar asociación</p>
                    </button>
                </li>
                <li>
                    <button
                        disabled = {uiReducer.loadingInComponent} 
                        onClick = { handleRemoveFavorite }
                        className = "__btn">
                            {
                                uiReducer.loadingInComponent 
                                    ?<LoadingInComponent />
                                    :<> 
                                        <IconTrash />
                                        <p>Eliminar de mis favoritos</p>
                                    </>
                            }
                            
                    </button>
                </li>
            </ul>
    )
}
