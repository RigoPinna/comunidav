import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getAssociationFromCountry } from '../../reducers/associationSearchReducer'
import { WrapperFeed } from '../events&publications/WrapperFeed'
import { ItemAssociation } from '../favoriteAsc/ItemAssociation'
import { IllustrationEmpty } from '../iconos/IllustrationEmpty'
import { LoadingInComponent } from '../loadings/LoadingInComponent'
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
        ( associationSearchReducer.length > 0 )
            ? setAssociations( associationSearchReducer )
            : setAssociations( statusMountedAsc.empty );
    }, [ associationSearchReducer ]);
    return (
        <>
            <Helmet>
                <title>Comunidav | Search</title>
            </Helmet>
            <OptionSearch />
            <WrapperFeed>
                {
                    ( associations === statusMountedAsc.loading )
                        ? <LoadingInComponent  textLoading="Cargando asociaciones"/>
                        : associations === statusMountedAsc.empty
                            ? <IllustrationEmpty message ={`No se encontró ninguna asociación en ${ landName}`}/>
                            : associations.map( association => <ItemAssociation {...association} viewMenuFavorite ={ false }/>)
                }
            </WrapperFeed>
        </>
    )
}
