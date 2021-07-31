import React from 'react';
import './HomeView.scss'

const HomeView = () => (
    <div className='home-container'>
        <h1 className='home-title'>
            Welcome to phonebook service{' '}
            <span role="img" aria-label="hello icon">
                💁‍♀️
            </span>
        </h1>
    </div>
);

export default HomeView;