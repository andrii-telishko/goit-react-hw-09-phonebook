import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { authOperations } from '../../redux/auth';
import '../RegisterView/RegisterView.scss'

export default function LoginView() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        switch (e.target.name) {
            case "email":
                setEmail(e.target.value);
                break;

            case "password":
                setPassword(e.target.value);
                break;

            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(authOperations.logIn({ email, password }));

        setEmail('');
        setPassword('');
    };

    return (<div>
        <h1 >Log In Page</h1>
        <form
            onSubmit={handleSubmit}
            className='reg-form'
            autoComplete="off"
        >
            <label className='reg-label'>
                E-Mail
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
            <button type="submit" className='reg-button'>Log In</button>
        </form>
    </div>)
};

