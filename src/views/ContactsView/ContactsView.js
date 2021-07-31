import React from 'react';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter';
import ContactsList from '../../components/ContactList'

const ContactsView = () => (
    <>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
    </>);

export default ContactsView;