import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../../redux/auth';
import '../RegisterView/RegisterView.scss'

class LoginView extends Component {
    state = {
        email: '',
        password: '',
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({ [name]: value });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onLogin(this.state);

        this.setState({ name: '', email: '', password: '' });
    };

    render() {
        const { email, password } = this.state;

        return (
            <div>
                <h1 >Log In Page</h1>
                <form
                    onSubmit={this.handleSubmit}
                    className='reg-form'
                    autoComplete="off"
                >
                    <label className='reg-label'>
                        E-Mail
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                        />
                    </label>

                    <label className='reg-label'>
                        Password
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit" className='reg-button'>Log In</button>
                </form>
            </div>
        );
    };
};

const mapDispatchToProps = {
    onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);