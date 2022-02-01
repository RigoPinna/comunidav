import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { ComunidavLogo } from '../iconos/ComunidavLogo'
import { IconHome } from '../iconos/IconHome'
import { IconInbox } from '../iconos/IconInbox'
import { IconSearch } from '../iconos/IconSearch'
import { Avatar } from '../Items/Avatar'

export const NavBar = ({ history }) => {
    const { image }  = useSelector(state => state.userLogedReducer )
    const handleOnClickAvatar = ( evt, state, setState ) => setState( !state );
    
    return (
        <header>
            <Link className="__Logo"  to ="/home" >
                <ComunidavLogo/>
            </Link>
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
                        <NavLink activeClassName="__navbar_option_active " className="__navbar_option" to = "/chat">
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
                    <li>
                        <Avatar image={image } history = { history } onClick={ handleOnClickAvatar }  />
                    </li>
                </ul>
            </nav>
        </header>
    )
}
