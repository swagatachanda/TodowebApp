import React from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Signup from '../screens/Signup/signup';
import Profile from '../screens/Login/login';

import './navbar.css'

class Navbar extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
        login: "Login",
        signup: "Sign Up"
      };
    };

    
    render(){
        return(
            <BrowserRouter>
            <div className='App'>
              <nav>
                <ul>
                  <li>
                    <Link to='/login'>{this.state.login}</Link>
                  </li>
                  <li>
                    <Link to='/signup'>{this.state.signup}</Link>
                  </li>
                </ul>
              </nav>
              
            <Switch>
              <Route path='/login'>
                <Profile/>
              </Route>
              <Route path='/signup'>
                <Signup/>
              </Route>
            </Switch>
            </div>
            </BrowserRouter>
            )
    }
}
export default Navbar