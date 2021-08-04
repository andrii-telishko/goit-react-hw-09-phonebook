import React from 'react';
import { useSelector } from 'react-redux';
import './AppBar.scss'
import Navigation from '../Navigation'
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/auth'

export default function AppBar() {
    const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

    return (<header className='app-header'>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>)

}
