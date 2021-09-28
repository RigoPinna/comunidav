import React from 'react'
import { ButtonBack } from '../ButtonBack/ButtonBack'
import { IconSearchLoupe } from '../iconos/IconSearchLoupe'
import { Input } from '../Inputs/Input'

export const OptionSearch = () => {
    return (
        <div className="__wrapper_options_search">
            <div className = "__wrapper_header_form">
                <ButtonBack />
                <h1>Buscar en comunidav</h1>
            </div>
            <form className = "__wrapper_options_search_body">
                <Input
                        name = "search" 
                        typeInput = {"search"} 
                        inputStyle = {'__input __input_with_icon'} 
                        placeholder = {'Nombre de asociación'}
                        InputIcon = { IconSearchLoupe }
                        value = {""}
                        onChange = {()=>{}}
                    />
            </form>
        </div>
    )
}
