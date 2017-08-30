import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageInput from './ImageInput';

class CreateContact extends Component {
  render() {
    return (
      <div>
      <Link className='close-create-contact' to='/'>Close</Link>
      <form className='create-contact-form'>
      <ImageInput className='create-contact-avatar-input'
       type='avatarURL' maxHeight={64} />
      </form>
      <div className='create-contact-details'>
        <input type='text' placeholder='Name'/>
        <input type='text' placeholder='abc@example.com' />
        <button>Add Contact</button>
      </div>
      </div>
    )
  }
}

export default CreateContact;
