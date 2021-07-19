import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useIsMounted } from "./useIsMounted";


export const useGetInfoUserLoged = () => {
    const [ state, setState ] = useState({})
    const { userLogedReducer } = useSelector( state => state );
    const [ isMounted ] = useIsMounted();
    useEffect(() => {
        if ( isMounted ) {
            if( userLogedReducer !== {}) {
                setState({
                    uid: userLogedReducer.uid,
                    aid: userLogedReducer.aid,
                    userName: userLogedReducer.userName ,
                    displayName: !!userLogedReducer.nameAsc ? userLogedReducer.nameAsc : userLogedReducer.namePerson ,
                    typeUser: userLogedReducer.typeUser,
                    text: userLogedReducer.typeUser,
                    category: userLogedReducer.category ,
                    description:  userLogedReducer.description,
                    image: userLogedReducer.image,
                    cityName: userLogedReducer.nameEstado,
                    shortCityName: userLogedReducer.abrestado
                })
            }
        }
        
    }, [ isMounted, userLogedReducer ]);
    return [ state ]
}
