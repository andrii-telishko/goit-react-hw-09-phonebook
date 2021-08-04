import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import './Navigation.scss'

export default function Navigation() {
    const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

    return (<nav>
        <NavLink to="/"
            exact
            className='nav-link'
            activeClassName='nav-link__active'>
            Main
        </NavLink>


        {isAuthenticated && (<NavLink
            to="/contacts"
            exact
            className='nav-link'
            activeClassName='nav-link__active'>
            Contacts
        </NavLink>)}
    </nav>)
}


