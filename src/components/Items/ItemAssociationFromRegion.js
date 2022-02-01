import React from 'react'
import ReactTooltip from 'react-tooltip';
import { ItemHoverAscFrom } from './ItemHoverAscFrom';
import { ItemUser } from './ItemUser';

export const ItemAssociationFromRegion = ( props ) => {
    const handleRedirectToProfileAsc = ( uid ) => {
        props.historyRouter.push( `/association/${uid}` );
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
                delayHide={200}
                delayShow={200}
                delayUpdate={200}
                place={'left'}
                getContent={( dataTip ) => <ItemHoverAscFrom data={ dataTip }/>}
            />
        </>
    )
}
