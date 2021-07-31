import { createReducer, combineReducers } from '@reduxjs/toolkit'
import { contactsActions } from './';

const { fetchContactsRequest, fetchContactsSuccess, fetchContactsError, addContactRequest, addContactSuccess, addContactError, deleteContactRequest, deleteContactSuccess, deleteContactError, changeFilter } = contactsActions;

const contactsFormReducer = createReducer([], {
    [fetchContactsSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) =>
        state.filter(({ id }) => id !== payload),
});

const filterReducer = createReducer('', {
    [changeFilter]: (_, { payload }) => payload
});

const loadingReducer = createReducer(false, {
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false
});

const contactsReducer = combineReducers({
    contacts: contactsFormReducer,
    filter: filterReducer,
    loading: loadingReducer
});

export default contactsReducer;