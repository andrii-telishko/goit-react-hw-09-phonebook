import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { contactsActions } from '../../redux/contacts';
import { getFilter } from '../../redux/contacts/contactsSelectors';
import '../../styles/base.scss';

const Filter = ({ value, onChange }) => {
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

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    value: getFilter(state)
});

const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);