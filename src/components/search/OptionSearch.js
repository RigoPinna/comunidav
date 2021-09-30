import React from 'react'
import { useChangeForm } from '../../hooks/useChangeForm'
import { ButtonBack } from '../ButtonBack/ButtonBack'
import { IconSearchLoupe } from '../iconos/IconSearchLoupe'
import { Input } from '../Inputs/Input'

export const OptionSearch = React.memo(({ associations, setState, ascReducer, landName }) => {
    const [ inputFormValues, handdleInputChange ] = useChangeForm({ search:"" });
    const getAssociatonByName = e => {
        e.preventDefault();
        const nameAsc = inputFormValues.search.trim();
        if (nameAsc !== "") {
            const associationsFiltered = associations.filter( asc => asc.displayName.toLowerCase().includes( nameAsc.toLowerCase()));
            setState( associationsFiltered );
            return;
        }
        // console.log("si");
        setState( ascReducer );
        // console.log(associationsFiltered)
    }
    
    return (
        <>
            <div className="__wrapper_options_search">
                <div className = "__wrapper_header_form">
                    <ButtonBack />
                    <h1>Buscar en comunidav</h1>
                </div>
                <form className = "__wrapper_options_search_body" onSubmit={  getAssociatonByName }>
                    <Input
                            name = "search" 
                            typeInput = {"search"} 
                            inputStyle = {'__input __input_with_icon'} 
                            placeholder = {'Nombre de asociación'}
                            InputIcon = { IconSearchLoupe }
                            value = {inputFormValues.search}
                            onChange = { handdleInputChange }
                        />
                </form>
            </div>
            {
                <h3>{!!inputFormValues.search ? `Resultados de ${inputFormValues.search}` : `Asociaciones en ${landName}`}</h3>
            }
        </>
    )
})
