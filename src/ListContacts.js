import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import EscapeStringRegex from 'escape-string-regexp';
import SortBy from 'sort-by';
import { Link } from 'react-router-dom';


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
  clearQuery = () => {
    this.setState({
      query: ''
    })
  }
  render() {
    const { contacts, onDeleteContact} = this.props
    const { query } = this.state

    let showingContacts
    if(query) {
      const match = new RegExp(EscapeStringRegex(query), 'i')
      showingContacts = contacts.filter((contact) => (match.test(contact.name)))
    }
    else {
      showingContacts = contacts
    }

    showingContacts = showingContacts.sort(SortBy('name'))

    return (
           <div className='list-contacts'>
            <div className='list-contacts-top'>
              <input className='search-contacts' type='text' placeholder='Search Contacts'
                value={query} onChange={(event) => this.updateQuery(event.target.value)} />
                <Link to='/create'
                   
                  className = 'add-contact'>Add Contact</Link>
            </div>

            { showingContacts.length !== contacts.length && (
              <div className='showing-contacts'>
                <span>Now showing {showingContacts.length} contacts of {contacts.length} total contacts </span>
                <button onClick={this.clearQuery}>Show all</button>
              </div>
            )}
            <ol className='contact-list'>
              {showingContacts.map((contact) => (
                <li key={contact.id} className='contact-list-item'>
                  <img className='contact-avatar' src={contact.avatarURL} alt='' />
                  <div className='contact-details'>
                    {contact.name}<br/>
                    {contact.email}
                  </div>
                  <button onClick={() => onDeleteContact(contact)} className='contact-remove'>
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
