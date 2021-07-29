import React from 'react'
import { useState } from 'react'

export const useHandleSelectChange = ( initialState ) => {
    const [ selectValue, setSelectValue ] = useState( initialState );

    const hanldSelectChange = ( { target } ) => {
        setSelectValue({...selectValue, ...{ [target.name]:target.value }});

    }

    return [ selectValue, hanldSelectChange ];

}
