
export const generateFormDataFromObject = ( OBJ_VALUES ) => {

    const keys = Object.keys( OBJ_VALUES )
    const values = Object.values( OBJ_VALUES )
    const formData = new FormData()
    
    values.forEach( ( value, i ) => formData.append( keys[ i ], value ) )

    return formData

}