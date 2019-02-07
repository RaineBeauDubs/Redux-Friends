import React, { Component } from 'react';
import { connect } from 'react-redux';

import FriendsList from './components/FriendsList';

import { getFriends } from './actions/actions';

import './App.css';

class App extends Component {

  componentDidMount(){
    this.props.getFriends();
  }
  render() {
    return (
      <div className="App">
        <h1>Hello, Friends!</h1>
        <FriendsList friends={this.props.friends} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  fetchingFriends: state.fetchingFriends
})

export default connect(
  mapStateToProps,
  { getFriends }
)(App);
