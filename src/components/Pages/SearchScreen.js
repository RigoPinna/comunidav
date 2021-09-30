import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAssociationFromCountry } from '../../reducers/associationSearchReducer'
import { WrapperFeed } from '../events&publications/WrapperFeed'
import { ItemAssociation } from '../favoriteAsc/ItemAssociation'
import { ItemInfoFav } from '../favoriteAsc/ItemInfoFav'
import { IconArrowRight } from '../iconos/IconArrowRight'
import { IconLocation } from '../iconos/IconLocation'
import { IllustrationEmpty } from '../iconos/IllustrationEmpty'
import { BadgeShort } from '../Items/BadgeShort'
import { LoadingInComponent } from '../loadings/LoadingInComponent'
import { ButtonMenuFavorite } from '../menus/ButtonMenuFavorite'
import { WrapperFeedAssociations } from '../profile/WrapperFeedAssociations'
import { OptionSearch } from '../search/OptionSearch'
const statusMountedAsc = {
    loading: undefined,
    empty: null,
}
export const SearchScreen = () => {
    const [associations, setAssociations] = useState( statusMountedAsc.loading )
    const { userLogedReducer, associationSearchReducer } = useSelector( state => state );
    const { lid, landName } = userLogedReducer
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( getAssociationFromCountry( lid ) );
    }, [ lid ]);

    useEffect(() => {
        if ( associationSearchReducer?.length ) {
            ( associationSearchReducer.length > 0 )
                ? setAssociations( associationSearchReducer )
                : setAssociations( statusMountedAsc.empty );

        }
    }, [ associationSearchReducer.length ]);
    return (
        <>
            <Helmet>
                <title>Comunidav | Search</title>
            </Helmet>
            <OptionSearch 
                ascReducer={ associationSearchReducer } 
                associations={ associations } 
                setState = { setAssociations }
                landName = { landName }
            />
            
            <WrapperFeedAssociations>
                {
                    ( associations === statusMountedAsc.loading )
                        ? <LoadingInComponent  textLoading="Cargando asociaciones"/>
                        : associations === statusMountedAsc.empty
                            ? <IllustrationEmpty message ={`No se encontró ninguna asociación en ${ landName}`}/>
                            : associations.map( asc => <ItemAssociation key={`itm-asc-search-${asc.uid}`} {...asc} viewMenuFavorite ={ false }/>)
                }
            </WrapperFeedAssociations>
        </>
    )
}
