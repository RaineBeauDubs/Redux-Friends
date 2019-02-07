import React from 'react';
// import { connect } from 'react-redux';

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addedFriend: {
        name: '',
        age: '',
        email: ''
      }
    };
  }

  render() {
    return (
      <div>
        <h2>Add Friend</h2>
        <form>
          <input 
            type='text'
            name='name'
            placeholder="Name..."
          />
          <input 
            type='text'
            name='age'
            placeholder="Age..."
          />
          <input 
            type='text'
            name='email'
            placeholder="E-Mail..."
          />
          <button type='submit'>Add Friend!</button>
        </form>
      </div>
    )
  }
}

export default FriendForm;