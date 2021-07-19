

export const useActiveSubmenuOption = (  ) => {

    const setClassActive = ( arrayOptionsSubmenu = [], optionSelected ) => {
        
        const idOptionSelected = optionSelected.getAttribute( 'id' );
        optionSelected.classList.add( '__submenu_option_active' )
        arrayOptionsSubmenu.forEach( option => {
            const idOption = option.getAttribute( 'id' );
            ( idOption !== idOptionSelected ) 
                && option.classList.remove( '__submenu_option_active' );
        });
    }

    return [ setClassActive ];
    
}
