import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Login from './LoginPage/Login';
import {configureFakeBackEnd} from './helper/fake.backend'
import { PrivateRoute } from './components/PrivateRoute';
import { HomePage } from './HomePage/HomePage';

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
      <div className="container">
      <div>
        <Router>
          <div>
           <Route path='/login' component={Login}></Route>    
           <PrivateRoute exact path='/' component={HomePage} ></PrivateRoute>       
          </div>
        </Router>
      </div>        
      </div>
    );
  }
}

export default App;
