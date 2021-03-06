import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFavorite } from "../reducers/ascFavoritesReducer";


export const useToggleFavorite = ( dataCreator, uid ) => {
    const { favoritesReducer } = useSelector( state => state );
    const dispatch = useDispatch();
    const [ isFavorite, setIsFavorite ] = useState( false )
    useEffect(() => {
        const isFav = favoritesReducer.some( itemFav => +itemFav.aid === +dataCreator.aid);
        setIsFavorite( isFav );
    }, [ favoritesReducer,dataCreator ])

    const handleAddToFavorite = () => {
        dispatch( addToFavorites( dataCreator, uid ) );
        setIsFavorite( true );

    }
    const handleRemoveFavorite = () => {
        dispatch( removeFavorite( +dataCreator.aid, +uid ) ); 
        setIsFavorite( false );
    }
    const hanldeToggleActionButton = () => {
        ( isFavorite ) 
            ? handleRemoveFavorite()
            : handleAddToFavorite()
    }

    return { isFavorite, hanldeToggleActionButton, handleAddToFavorite, handleRemoveFavorite };
}
