import React from 'react'
import { MessageRecibed } from '../../chat/MessageRecibed'
import { ItemUser } from '../../Items/ItemUser'

export const ItemPublication = ({pid,image, displayName, description, responses=[], typeUser }) => {
    return (
        <div className = "__wrapper_publication">
            <ItemUser typeUser={typeUser} image={image} displayName={displayName}/>
            <div class="info_general_evt">
                <p>{ description }</p>
                
            </div>
            <div class="container-response">
                <p>{ (responses.length > 0) ?"Respuestas:" : "No hay respuestas hasta el momento:("}</p>
                {
                    (responses.length > 0) 
                        && responses.map( 
                            ({ image, displayName, response}) => <MessageRecibed image={image} displayName={displayName} text={response}/>
                        )
                }
            </div>
            <form action="" method="post">
                <div class="search__input">
                    <input type="text" name="" />
                </div>
                <button class="__btn">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                </button>
            </form>

            
        </div>
    )
}
