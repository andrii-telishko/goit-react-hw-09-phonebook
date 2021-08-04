import React, {useState, useCallback } from 'react';
import {useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import './RegisterView.scss'

export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = useCallback(({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        }
    }, [])

    const handleSubmit = useCallback(e => {
        e.preventDefault();

        dispatch(authOperations.register({name, email, password}))

        setName('');
        setEmail('');
        setPassword('');
    }, [dispatch, name, email, password])

    return (<div>
        <h1>Registration page</h1>

        <form
            onSubmit={handleSubmit}
            className='reg-form'
            autoComplete="off"
        >
            <label className='reg-label'>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
            </label>

            <label className='reg-label'>
                E-mail
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </label>

            <label className='reg-label'>
                Password
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
            </label>

            <button type="submit" className='reg-button'>Registration</button>
        </form>
    </div>)
};

