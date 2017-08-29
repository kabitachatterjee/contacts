import React, { Component } from 'react'

class ListContacts extends Component {
render() {
  console.log(this.props);
    return (
      <div>
        <ol className='contact-list'>
        {this.props.contacts.map((contact) => (
          <li key={contact.id}>{contact.name}</li>
        ))}
        </ol>
      </div>
    );
  }
}

export default ListContacts;
