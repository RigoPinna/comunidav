import { getTextFormated } from "./getTextFormated";


export const getSearchAsc = ( associations, search ) => {
    return associations.filter( asc => {
        return (
            getTextFormated( asc.displayName).includes( search )
            || getTextFormated( asc.nameMun ).includes( search )
            || getTextFormated( asc.nameState ).includes( search )
            || getTextFormated( asc.landName ).includes( search )
            || getTextFormated( asc.category ).includes( search )

        )
    });
}
