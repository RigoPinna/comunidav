import React from 'react'
import { useDispatch } from 'react-redux'
import { resetFavorites } from '../../reducers/ascFavoritesReducer'
import { restAssociationFromRegio } from '../../reducers/asocitionsFromRegionReducer'
import { logout } from '../../reducers/authReducer'
import { resetGroups } from '../../reducers/groupsEventReducer'
import { resetMyEvent } from '../../reducers/myEventsReducer'
import { uiLogout } from '../../reducers/uiReducer'

import { IconConfig } from '../iconos/IconConfig'
import { IconInfo } from '../iconos/IconInfo'
import { IconLogout } from '../iconos/IconLogout'
import { IconUser } from '../iconos/IconUser'

export const SubMenuUserLoged = ({ history }) => {
    const dispatch = useDispatch();
    const hanldeLogout = () => {
        dispatch( logout() );
        dispatch( resetMyEvent() );
        dispatch( uiLogout() );
        dispatch( restAssociationFromRegio() );
        dispatch( resetFavorites() );
        dispatch( resetGroups() );
        localStorage.removeItem( 'uid' );
        history.replace('/login');
    }
    return (
        <ul className="__modal_submenu_event __submenu_bg_white">
            <li>
                <button className = "__btn">
                    <IconUser />
                    <p>Mi perfil</p>
                </button>
            </li>
            <li>
                <button className = "__btn">
                    <IconConfig />
                    <p>Configuración de cuenta</p>
                </button>
            </li>
            <li>
                <button className = "__btn">
                    <IconInfo />
                    <p>Información y herramientas</p>
                </button>
            </li>
            <li>
                <button onClick = { hanldeLogout } className = "__btn">
                    <IconLogout />
                    <p>Salir</p>
                </button>
            </li>
        </ul>

    )
}
