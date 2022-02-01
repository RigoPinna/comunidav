import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateUserData } from '../reducers/authReducer'

export const useUpdateUserData = ( setIsDiferent, setIsSaved, isValid, inputFormValues, oldData ) => {
    const dispatch = useDispatch()
    const [ isLoading, setisLoading ] = useState( false )
    const handleSaveData = (evt ) => {
        evt.preventDefault();
        if ( isValid ) {
            setisLoading( true )
            dispatch( updateUserData( inputFormValues, oldData ) );
            setisLoading( false )
            setIsDiferent( false );
            setIsSaved( true );
        }
    }
    return [isLoading, handleSaveData ];
    
}
