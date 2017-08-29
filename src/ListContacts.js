import React, { Component } from 'react';
import { PropTypes } from 'prop-types';


class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim()
    })
  }
  render() {
    return (
           <div className='list-contacts'>
            <div className='list-contacts-top'>
              <input className='search-contacts' type='text' placeholder='Search Contacts'
                value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />
            </div>
            <ol className='contact-list'>
              {this.props.contacts.map((contact) => (
                <li key={contact.id} className='contact-list-item'>
                  <img className='contact-avatar' src={contact.avatarURL} alt='' />
                  <div className='contact-details'>
                    {contact.name}<br/>
                    {contact.email}
                  </div>
                  <button onClick={() => this.props.onDeleteContact(contact)} className='contact-remove'>
                    Remove
                  </button>
                </li>
               ))}
              </ol>
              </div>
    );
  }
}


export default ListContacts;
