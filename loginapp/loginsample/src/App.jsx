import React, { Component } from 'react';
import './App.css';
import Login from './LoginPage/Login';
import {configureFakeBackEnd} from './helper/fake.backend'
configureFakeBackEnd();

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    }
  }

  render() {
    return (
      <div className="root-container">
        <Login/>
      </div>
    );
  }
}

export default App;
