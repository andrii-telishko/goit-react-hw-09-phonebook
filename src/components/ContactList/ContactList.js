import React, { useEffect } from 'react';
import ContactItem from '../ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from '../../redux/contacts'
import { getLoader, getFilteredContacts } from '../../redux/contacts/contactsSelectors'
import '../../styles/base.scss'
import './ContactList.scss';

export default function ContactsList() {
    const dispatch = useDispatch();
    const contacts = useSelector(getFilteredContacts);
    const isLoadingContacts = useSelector(getLoader);

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    const onClick = (id) => dispatch(contactsOperations.deleteContact(id));

    return (<>
        {isLoadingContacts && <h1>Loading...</h1>}
        <ul className='contact-list'>
            {contacts.map(({ id, name, number }) => {
                return (<li key={id} className='contact-item'><ContactItem
                    name={name}
                    number={number} />
                    <button type='button'
                        onClick={() => { onClick(id) }} className='button contact-item__button'>Delete</button>
                </li>)
            })}
        </ul>
    </>)
};
