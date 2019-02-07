import React, { Component } from 'react';
import { connect } from 'react-redux';

import FriendsList from './components/FriendsList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, Friends!</h1>
        <FriendsList />
      </div>
    );
  }
}

export default App;
