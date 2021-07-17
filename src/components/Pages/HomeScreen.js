import React from 'react'
import { Link } from 'react-router-dom';

export const HomeScreen = () => {
    return (
        <div>
            Hola desde la home
            <Link to="/profile">
                ir a perfil
            </Link>
        </div>
    )
}
