import React from 'react'
import ReactTooltip from 'react-tooltip';
import { ItemHoverAscFrom } from './ItemHoverAscFrom';
import { ItemUser } from './ItemUser';

export const ItemAssociationFromRegion = ({uid,image, ascName,category,userName, description, historyRouter }) => {
    const handleRedirectToProfileAsc = ( uid ) => {
        historyRouter.push( `/user?q=${uid}` );

    }
    return (
        <>
            <div  data-for= {`tooltTip-Asc-${uid}`} data-tip = {JSON.stringify({ uid, ascName,image, category, userName, description })}>
                <ItemUser
                   
                    handle={ () => { handleRedirectToProfileAsc( uid ) } }
                    displayName = { ascName } 
                    textSecondary = { category ? `Categoria • ${ category }` : userName } 
                    image = { image }
                />
            </div>
            <ReactTooltip 
                id = {`tooltTip-Asc-${uid}`}
                backgroundColor ={"#DFDFDF"}
                textColor={"black"}
                effect = 'solid'
                delayHide={500}
                delayShow={500}
                delayUpdate={500}
                place={'left'}
                getContent={( dataTip ) => <ItemHoverAscFrom data={ dataTip }/>}
            />
        </>
    )
}
