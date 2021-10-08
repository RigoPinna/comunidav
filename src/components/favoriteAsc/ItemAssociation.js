import React from 'react'
import { Link } from 'react-router-dom'
import { IconArrowRight } from '../iconos/IconArrowRight'
import { IconLocation } from '../iconos/IconLocation'
import { AvatarAssociation } from './AvatarAssociation'
import { ItemInfoFav } from './ItemInfoFav'

export const ItemAssociation = React.memo(( dataAsc ) => {
   console.table( dataAsc.description )
    const location = ( !!dataAsc.nameMun && !!dataAsc.abrvEstado ) ? `${dataAsc.nameMun},${dataAsc.abrvEstado}`: undefined;
    return (
        <div className ="__wrapper_item_asc">
            <AvatarAssociation {...dataAsc }/>
            <div className ="__wrapper_item_asc_body">
                <h3>{dataAsc.displayName}</h3>
                {
                    dataAsc.typeUser === "ASC" 
                        &&<> 
                            <ItemInfoFav info = { location } Icon = {IconLocation} colorIcon = {'#77A7FF'} />
                            <p>{ !!dataAsc.description ? dataAsc.description: "No hay descripción"}</p>
                        </>
                }
               
            </div>
            {
                !dataAsc.isProfile 
                && <div className ="__wrapper_item_asc_footer">
                        <Link className="__btn" to={`/association/${dataAsc.uid}`}>
                            Ver asociación
                            <IconArrowRight />
                        </Link>
                    </div>
            }
            
        </div>
    )
})
