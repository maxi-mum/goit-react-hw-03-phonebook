import React from 'react';
import s from './List.module.css';
import PropTypes from 'prop-types';
// import shortid from 'shortid';

const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={s.contacts}>
    {contacts.map(({ id, name, number }) => (
      <li className={s.listItem} key={id}>
        <p>
          {name}: {number}
        </p>
        <button
          type="button"
          className={s.button}
          onClick={() => onDeleteContact(id)}
        >
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
