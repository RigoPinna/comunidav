import React from 'react'
import { NavLink } from 'react-router-dom'
import { IconHome } from '../iconos/IconHome'
import { IconInbox } from '../iconos/IconInbox'
import { IconSearch } from '../iconos/IconSearch'
import { IconUser } from '../iconos/IconUser'
export const NavBarMovile = () => {

    return (
        <div className ="__navbar_mobile">
            <nav>
                <ul>
                    <li className ="_navbar_option_responsive">
                        <NavLink activeClassName="__navbar_option_active " className="__navbar_option" to = "/home">
                            <IconHome/>
                            <p>Eventos</p>
                            <span></span>
                        </NavLink >
                    </li>
                    <li className ="_navbar_option_responsive">
                        <NavLink activeClassName="__navbar_option_active " className="__navbar_option" to = "/inbox">
                            <IconInbox/>
                            <p>Inbox</p>
                            <span></span>
                        </NavLink>
                    </li>
                    <li className ="_navbar_option_responsive">
                        <NavLink activeClassName="__navbar_option_active " className="__navbar_option" to = "/search">
                            <IconSearch />
                            <p>Buscar</p>
                            <span></span>
                        </NavLink>
                    </li>
                    <li className ="_navbar_option_responsive">
                        <NavLink activeClassName="__navbar_option_active " className="__navbar_option" to = {`/profile`}>
                            <IconUser />
                            <p>Mi perfil</p>
                            <span></span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
