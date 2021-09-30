import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTextFormated } from '../../helpers/getTextFormated'
import { useChangeEffectLocation } from '../../hooks/useChangeEffectLocation'
import { useChangeForm } from '../../hooks/useChangeForm'
import { useChangeSelect } from '../../hooks/useChangeSelect'
import { getAssociationFromCountry } from '../../reducers/associationSearchReducer'
import { ButtonBack } from '../ButtonBack/ButtonBack'
import { IconSearchLoupe } from '../iconos/IconSearchLoupe'
import { Input } from '../Inputs/Input'
import { InputSelect } from '../Inputs/InputSelect'
import { InputSwitch } from '../Inputs/InputSwitch'
import { LoadingInComponent } from '../loadings/LoadingInComponent'

export const OptionSearch = React.memo(({ setState, ascReducer, viewMap, setViewMap }) => {
    const dispatch = useDispatch();
    const [ country,  handdleChangeCountry ] = useChangeSelect({ land:1 });
    const [ arrayLands ] = useChangeEffectLocation({land:0});
    const [ inputFormValues, handdleInputChange, ,hanldeResetValues ] = useChangeForm({ search:"" });
    useEffect(() => {
        ( country?.land ) && dispatch( getAssociationFromCountry( country.land ) );
    }, [ country.land ])
    const getAssociatonByTextSearch = e => {
        e.preventDefault();
        const search = getTextFormated( inputFormValues.search );
        if ( search !== "" ) {
            const associations = [...ascReducer];
            const associationsFiltered = associations.filter( asc => {
                return (
                    getTextFormated( asc.displayName).includes( search )
                    || getTextFormated( asc.nameMun ).includes( search )
                    || getTextFormated( asc.nameState ).includes( search )
                    || getTextFormated( asc.landName ).includes( search )
                    || getTextFormated( asc.category ).includes( search )

                )
            });
            setState( associationsFiltered );
            return;
        }
        setState( ascReducer );
    }
    const hanldeResetForm = e => {
        e.preventDefault();
        hanldeResetValues();
        setState( ascReducer );
        
    }
    
    return (
        <>
            <div className="__wrapper_options_search">
                <div className = "__wrapper_header_form">
                    <ButtonBack />
                    <h1>Buscar en comunidav</h1>
                </div>
                <form className = "__wrapper_options_search_body" onSubmit={  getAssociatonByTextSearch }>
                    <p>Buscar asociaciones en:</p>
                    <div className = "__input_wrapper">
                        { ( arrayLands.length <= 0 ) 
                            && <LoadingInComponent textLoading = {'Espere un momento, estamos cargando los paises...'} />
                        }
                        {
                            ( arrayLands.length > 0 )
                                &&  <InputSelect
                                        onChange = { handdleChangeCountry }
                                        name = { 'land' } 
                                        arrayData = { arrayLands } 
                                        textDefault = {'Selecciona tu estado'}
                                        keyName = {'land'}
                                        optionDefault = { country.land } />
                        }
                    </div>
                    <Input
                            name = "search" 
                            typeInput = {"search"} 
                            inputStyle = {'__input __input_with_icon'} 
                            placeholder = {'Nombre de asociación o municipio o estado o categoria'}
                            InputIcon = { IconSearchLoupe }
                            value = {inputFormValues.search}
                            onChange = { handdleInputChange }
                        />
                    <InputSwitch text="Ver asociaiones en el mapa" hanldeActive={()=> setViewMap( !viewMap )} idSwitch="viewMap" checked={ viewMap } />
                    <input type="reset" onClick={ hanldeResetForm } className ="__btn" value="Restablecer busqueda"/>
                </form>
            </div>
            {
                <h3>{!!inputFormValues.search ? `Resultados de ${inputFormValues.search}` : `Restultados`}</h3>
            }
            
        </>
    )
})
