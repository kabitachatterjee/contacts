import React from 'react';
import PropTypes from 'prop-types';

function ListContacts(props) {
return (
        <ol className='contact-list'>
          {props.contacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
              <img className='contact-avatar' src={contact.avatarURL} alt='' />
              <div className='contact-details'>
                {contact.name}<br/>
                {contact.email}
              </div>
              <button onClick={() => props.onDeleteContact(contact)} className='contact-remove'>
                Remove
              </button>
            </li>
           ))}
          </ol>
);
}
ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired
}


export default ListContacts;
