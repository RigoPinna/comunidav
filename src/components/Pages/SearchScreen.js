import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { getAssociationFromCountry } from '../../reducers/associationSearchReducer'

import { ItemAssociation } from '../favoriteAsc/ItemAssociation'

import { IllustrationEmpty } from '../iconos/IllustrationEmpty'
import { LoadingInComponent } from '../loadings/LoadingInComponent'
import { MapAssociationsSearch } from '../map/MapAssociationsSearch'
import { WrapperFeedAssociations } from '../profile/WrapperFeedAssociations'
import { OptionSearch } from '../search/OptionSearch'
const statusMountedAsc = {
    loading: undefined,
    empty: null,
}
export const SearchScreen = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [associations, setAssociations] = useState( statusMountedAsc.loading )
    const { userLogedReducer, associationSearchReducer } = useSelector( state => state );
    const { lid, landName } = userLogedReducer;
    const [ viewMap, setViewMap ] = useState( false )
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
            <OptionSearch 
                ascReducer={ associationSearchReducer } 
                associations={ associations } 
                setState = { setAssociations }
                landName = { landName }
                setViewMap = {setViewMap}
                viewMap = { viewMap }
                history = { history }
            />
            {
                viewMap && <MapAssociationsSearch  associations={associations}/>
            }
            
            <WrapperFeedAssociations>
                {
                    ( associations === statusMountedAsc.loading )
                        ? <LoadingInComponent  textLoading="Cargando asociaciones"/>
                        : associations === statusMountedAsc.empty
                            ? <IllustrationEmpty message ={`No se encontró ninguna asociación`}/>
                            : associations.map( asc =>{ 
                                return (
                                    <ItemAssociation 
                                        key={`itm-asc-search-${asc.uid}`} 
                                        {...asc} 
                                        viewMenuFavorite ={ false }
                                        viewButtonBack ={ false }
                                        typeUser = { "ASC" }
                                        />
                                )
                            })
                }
            </WrapperFeedAssociations>
        </>
    )
}
