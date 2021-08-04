import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsActions } from '../../redux/contacts';
import { getFilter } from '../../redux/contacts/contactsSelectors';
import '../../styles/base.scss';

export default function Filter() {
    const dispatch = useDispatch();
    const value = useSelector(getFilter);

    const onChange = (e) => dispatch(contactsActions.changeFilter(e.target.value));

    return (
        <label className='label'>
            Find contact by name
            <input
                type="text"
                value={value}
                onChange={onChange}
                className='input' />
        </label>
    );
};

