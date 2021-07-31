import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Navigation/Navigation.scss'

const AuthNav = () => (
    <div>
        <NavLink
            to="/register"
            exact
            className='nav-link'
            activeClassName='nav-link__active'
        >
            Registration
        </NavLink>
        <NavLink
            to="/login"
            exact
            className='nav-link'
            activeClassName='nav-link__active'
        >
            Log In
        </NavLink>
    </div>
);

export default AuthNav;