import React from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../actions/actions';

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

  handleChange = event => {
    this.setState({
      addedFriend: {
        ...this.state.addedFriend, 
        [event.target.name]: event.target.value
      }
    });
  };

  addFriend = event => {
    event.preventDefault();
    this.props.addFriend(this.state.addedFriend);
  };

  render() {
    return (
      <div>
        <h2>Add Friend</h2>
        <form onSubmit={this.addFriend}>
          <input 
            type='text'
            name='name'
            placeholder="Name..."
            onChange={this.handleChange} 
            value={this.state.addedFriend.name}
          />
          <input 
            type='text'
            name='age'
            placeholder="Age..."
            onChange={this.handleChange} 
            value={this.state.addedFriend.age}
          />
          <input 
            type='text'
            name='email'
            placeholder="E-Mail..."
            onChange={this.handleChange} 
            value={this.state.addedFriend.email}
          />
          {this.props.postError ? <h3>Oops! Something went wrong!</h3> : null}
          {this.props.postSuccessMessage ? <h3>New friend added successfully!</h3> : null}
          <button type='submit'>{this.props.isPosting ? <h5>Adding...</h5> : 'Add Friend!'}</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isPosting: state.isPosting,
    postSuccessMessage: state.postSuccessMessage,
    postError: state.postError
  }
}

export default connect(
  mapStateToProps,
  { addFriend }
)(FriendForm);