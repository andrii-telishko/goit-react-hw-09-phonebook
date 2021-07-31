import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ContactForm.scss'
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/contacts'
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors'
import '../../styles/base.scss';

class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    };

    state = {
        name: '',
        number: ''
    };

    handleChange = (e) => {
        this.setState({ [e.currentTarget.name]: e.currentTarget.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        const { name, number } = this.state;

        if (name !== '' && number !== '') {
            this.props.allContacts.find(contact => contact.number === number)
                ? alert(`this ${number} is already exist`)
                : this.props.onSubmit(name, number);
            this.reset();
        } else { alert('Please fill empty fields') }
    };

    reset() {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='contacts-form'>
                <label className='label'>
                    Name<input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                        name="name"
                        className='input' />
                </label>
                <label className='label'>
                    Number<input
                        type="tel"
                        value={this.state.number}
                        onChange={this.handleChange}
                        name="number"
                        className='input' />
                </label>
                <button type="submit" className='button contacts-form__button'>Add contact</button>
            </form>
        );
    };
};

const mapStateToProps = state => ({
    allContacts: getFilteredContacts(state)
})

const mapDispatchToProps = dispatch => ({
    onSubmit: (name, number) => dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);