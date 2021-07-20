import React from 'react'
import { Link } from 'react-router-dom';

export const HomeScreen = () => {
    return (
        <div>
            <h1>HOME</h1>
            <Link to="/profile">
                ir a perfil
            </Link>
        </div>
    )
}
