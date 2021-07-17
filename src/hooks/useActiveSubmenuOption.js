

export const useActiveSubmenuOption = (  ) => {
    const setClassActive = (arrayOptionsSubmenu = [], optionSelected) => {

        const idOptionSelected = optionSelected.getAttribute( 'id' );
        optionSelected.classList.add( '__submeu_otion_active' )
        console.log(arrayOptionsSubmenu)
        arrayOptionsSubmenu.forEach( option => {
            const idOption = option.getAttribute( 'id' );
            console.log( idOption, idOptionSelected);
            ( idOption !== idOptionSelected ) 
                && option.classList.remove( '__submeu_otion_active' );
        });
    }

    return [ setClassActive ];
    
}
