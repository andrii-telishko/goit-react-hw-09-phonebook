import axios from 'axios';
import { contactsActions } from './'

const { fetchContactsRequest, fetchContactsSuccess, fetchContactsError, addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError } = contactsActions;

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const fetchContacts = () => dispatch => {
    dispatch(fetchContactsRequest());

    axios.get('/contacts').then(({ data }) => dispatch(fetchContactsSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
};

const addContact = (name, number) => dispatch => {
    const contact = { name, number };

    dispatch(addContactRequest());

    axios.post('/contacts', contact).then(({ data }) =>
        dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error)));
};

const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());

    axios.delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error)));
};

export default { fetchContacts, addContact, deleteContact }