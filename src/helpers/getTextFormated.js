
export const getTextFormated = ( text ) => {
    return ( text.length > 0) ? removeAccentsAndComas(text) : "";

}
const removeAccentsAndComas = ( text ) => {
    let  textFormated =  text.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    textFormated = textFormated.replace(/[,]/g," ")
    return textFormated;
}

