import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './defaultAvatar.jpg';
import './UserMenu.scss'



const UserMenu = ({ avatar, name, onLogout }) => (
    <div className='user-container'>
        <img src={avatar} alt="" width="32" className='user-avatar' />
        <span className='user-name'>Welcome, {name}</span>
        <button type="button" onClick={onLogout} className='user-btn'>
            Logout
        </button>
    </div>
);
const mapStateToProps = state => ({
    name: authSelectors.getUsername(state),
    avatar: defaultAvatar,
});

const mapDispatchToProps = {
    onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);