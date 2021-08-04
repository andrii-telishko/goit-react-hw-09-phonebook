import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './defaultAvatar.jpg';
import './UserMenu.scss'

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);

    const onLogout = () => dispatch(authOperations.logOut());

    return (
        <div className='user-container'>
            <img src={defaultAvatar} alt="" width="32" className='user-avatar' />
            <span className='user-name'>Welcome, {name}</span>
            <button type="button" onClick={onLogout} className='user-btn'>
                Logout
            </button>
        </div>
    );
};
