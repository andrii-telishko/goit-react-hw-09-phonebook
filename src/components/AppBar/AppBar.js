import React from 'react';
import { connect } from 'react-redux';
import './AppBar.scss'
import Navigation from '../Navigation'
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth'

const AppBar = ({ isAuthenticated }) => (
    <header className='app-header'>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
);

const mapStateToProps = state => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);