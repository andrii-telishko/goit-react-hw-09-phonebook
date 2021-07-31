import React, { Component, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import './RegisterView.scss'

export default function RegisterView() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
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
    };

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(authOperations.register())

        setName('');
        setEmail('');
        setPassword('');
    };

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

// class RegisterView extends Component {
//     state = {
//         name: '',
//         email: '',
//         password: '',
//     };

//     handleChange = ({ target: { name, value } }) => {
//         this.setState({ [name]: value });
//     };

//     handleSubmit = e => {
//         e.preventDefault();

//         this.props.onRegister(this.state);

//         this.setState({ name: '', email: '', password: '' });
//     };

//     render() {
//         const { name, email, password } = this.state;

//         return (
//             <div>
//                 <h1>Registration page</h1>

//                 <form
//                     onSubmit={this.handleSubmit}
//                     className='reg-form'
//                     autoComplete="off"
//                 >
//                     <label className='reg-label'>
//                         Name
//                         <input
//                             type="text"
//                             name="name"
//                             value={name}
//                             onChange={this.handleChange}
//                         />
//                     </label>

//                     <label className='reg-label'>
//                         E-mail
//                         <input
//                             type="email"
//                             name="email"
//                             value={email}
//                             onChange={this.handleChange}
//                         />
//                     </label>

//                     <label className='reg-label'>
//                         Password
//                         <input
//                             type="password"
//                             name="password"
//                             value={password}
//                             onChange={this.handleChange}
//                         />
//                     </label>

//                     <button type="submit" className='reg-button'>Registration</button>
//                 </form>
//             </div>
//         );
//     }
// };


// const mapDispatchToProps = {
//     onRegister: authOperations.register,
// };

// export default connect(null, mapDispatchToProps)(RegisterView);