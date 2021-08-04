import React, { useState } from 'react';
import './ContactForm.scss'
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from '../../redux/contacts'
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors'
import '../../styles/base.scss';

export default function ContactForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const contacts = useSelector(getFilteredContacts);

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                setName(value);
                break;

            case 'number':
                setNumber(value);
                break;
            default:
                return
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name !== '' && number !== '') {
            contacts.find(contact => contact.number === number)
                ? alert(`this ${number} is already exist`)
                : dispatch(contactsOperations.addContact(name, number));
            reset();
        } else { alert('Please fill empty fields') }
    };

    const reset = () => {
        setName('');
        setNumber('');
    }

    return (<form onSubmit={handleSubmit} className='contacts-form'>
        <label className='label'>
            Name<input
                type="text"
                value={name}
                onChange={handleChange}
                name="name"
                className='input' />
        </label>
        <label className='label'>
            Number<input
                type="tel"
                value={number}
                onChange={handleChange}
                name="number"
                className='input' />
        </label>
        <button type="submit" className='button contacts-form__button'>Add contact</button>
    </form>);
};



