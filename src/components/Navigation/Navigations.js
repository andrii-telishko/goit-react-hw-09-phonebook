import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/auth';
import './Navigation.scss'

const Navigation = ({ isAuthenticated }) => (
    <nav>
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
    </nav>
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);