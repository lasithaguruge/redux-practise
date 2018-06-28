import React, { Component } from 'react';
import './App.css';
import UserDataContainer from './component/UserDataContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserDataContainer />
      </div>
    );
  }
}

export default App;
