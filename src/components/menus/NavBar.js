import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ComunidavLogo } from '../iconos/ComunidavLogo'
import { IconHome } from '../iconos/IconHome'
import { IconInbox } from '../iconos/IconInbox'

export const NavBar = () => {
    return (
        <header>
            <Link className = "optionMenu" to ="/home" >
                <ComunidavLogo/>

            </Link>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName="__icon_navoption_active" className="__icon_navoption" to = "/home">
                            <IconHome/>
                        </NavLink >
                    </li>
                    <li>
                        <NavLink activeClassName="__icon_navoption_active" className="__icon_navoption" to = "/inbox">
                        <IconInbox/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="__icon_navoption_active" className="__icon_navoption" to = "/search">
                            Buscar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName="__icon_navoption_active" className="__icon_navoption" to = "/profile">
                            Perfil
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
