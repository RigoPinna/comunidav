import React from 'react'
import ReactTooltip from 'react-tooltip';
import { ItemHoverAscFrom } from './ItemHoverAscFrom';
import { ItemUser } from './ItemUser';

export const ItemAssociationFromRegion = ( props ) => {
    const handleRedirectToProfileAsc = ( uid ) => {
        props.historyRouter.push( `/user?q=${uid}` );

    }
    return (
        <>
            <div  data-for= {`tooltTip-Asc-${props.uid}`} data-tip = {JSON.stringify({...props} )}>
                <ItemUser
                   
                    handle={ () => { handleRedirectToProfileAsc( props.uid ) } }
                    displayName = { props.ascName } 
                    textSecondary = { props.category ? `Categoria • ${ props.category }` : props.userName } 
                    image = { props.image }
                />
            </div>
            <ReactTooltip 
                id = {`tooltTip-Asc-${props.uid}`}
                type="info"
                backgroundColor="white"
                borderColor="#DBDBDB"
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
