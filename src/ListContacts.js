import React, { Component } from 'react';
function ListContacts(props) {
return (
        <ol className='contact-list'>
          {props.contacts.map((contact) => (
            <li key={contact.id} className='contact-list-item'>
              <img className='contact-avatar' src={contact.avatarURL} />
              <div className='contact-details'>
                {contact.name}<br/>
                {contact.email}
              </div>
              <button className='contact-remove'>
                Remove
              </button>
            </li>
           ))}
          </ol>
);
}


// class ListContacts extends Component {
// render() {
//   console.log(this.props);
//     return (
//       <ol className='contact-list'>
//         {this.props.contacts.map((contact) => (
//           <li key={contact.id} className='contact-list-item'>
//             <img className='contact-avatar' src={contact.avatarURL} />
//             <div className='contact-details'>
//               {contact.name}<br/>
//               {contact.email}
//             </div>
//             <button className='contact-remove'>
//               Remove
//             </button>
//           </li>
//          ))}
//         </ol>
//
//     );
//   }
// }

export default ListContacts;
