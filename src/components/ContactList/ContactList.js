import React, { Component } from 'react';
import ContactItem from '../ContactItem';
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/contacts'
import { getLoader, getFilteredContacts } from '../../redux/contacts/contactsSelectors'
import PropTypes from 'prop-types';
import '../../styles/base.scss'
import './ContactList.scss';

class ContactsList extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onClick: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchContacts();
    };

    render() {
        return (
            <>
                {this.props.isLoadingContacts && <h1>Loading...</h1>}
                <ul className='contact-list'>
                    {this.props.contacts.map(({ id, name, number }) => {
                        return (<li key={id} className='contact-item'><ContactItem
                            name={name}
                            number={number} />
                            <button type='button'
                                onClick={() => { this.props.onClick(id) }} className='button contact-item__button'>Delete</button>
                        </li>)
                    })}
                </ul>
            </>
        );
    };
};

const mapStateToProps = state => ({
    contacts: getFilteredContacts(state),
    isLoadingContacts: getLoader(state)
});

const mapDispatchToProps = dispatch => ({
    onClick: id => dispatch(contactsOperations.deleteContact(id)),
    fetchContacts: () => dispatch(contactsOperations.fetchContacts())
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);