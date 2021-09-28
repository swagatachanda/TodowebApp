import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Signup from '../screens/Signup/signup';
import MenuIcon from '@material-ui/icons/Menu';
import Forgetpass from '../screens/forgetpassword/Forgetpass'

import './navbar.css'

class Navbar extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
        login: "Login",
        signup: "Sign Up"
      };

      this.logout = this.logout.bind(this)
    };


    logout(){
      const url=`/api/user/logout`
      fetch(url)
      .then((Response)=>Response.json())
      .then((back)=>{
      localStorage.setItem('logged', back.logged.islogged)
      localStorage.removeItem('data')
      localStorage.removeItem('expiry')
      window.location.assign('/')
  })
  }

   
    
    render(){
        return(
            <BrowserRouter>
           
            <div>
              <header className='toolbar'>
              <nav className='toolbar__navigation'>
                <div>
                  <MenuIcon onClick={this.props.drawer} style={{cursor: 'pointer'}} className='toggle'/>
                </div>
                <div className='toolbar__logo'><a href='/login'>Wecome to my notes📋</a></div>
                <div className='spacer'/>
                <div className='toolbar__items'>
                <ul>
                  <li>
                  <div>
                        {this.props.search}
                      </div>
                  </li>
                  <li>
                 
                    <div className='username'>{this.props.login}</div>
                  </li>
                  <li>
                    <div className='username' onClick={this.logout}>
               
                      {this.props.signup}
                      </div>
                      
                    
                  </li>
                </ul>
                </div>
        
              </nav>
              </header>
            <Switch>
              <Route path='/signup'>
                <Signup />
              </Route>
              <Route path='/forgetpass'>
                <Forgetpass />
              </Route>
            </Switch>
            </div>
            </BrowserRouter>
            )
    }
}
export default Navbar