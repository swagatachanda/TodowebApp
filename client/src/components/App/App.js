
import './App.css';
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Navbar from '../Navbar/navbar';
import Page from '../screens/Profile/profile';
// import BellA from './components/images/mynote.jfif'
// import Appform from './appform';

class App extends React.Component{
  
  render(){
    var router
    console.log(localStorage.getItem('logged'))
    const skip=()=>{
      if(new Date(Date.now()).toLocaleString()>=new Date(localStorage.getItem('expiry')).toLocaleString()){
        localStorage.setItem('logged', false)
        localStorage.removeItem('data')
      }
    
    if(localStorage.getItem('data')==null||!localStorage.getItem('logged')){
      localStorage.removeItem('logged')
      localStorage.removeItem('data')
      localStorage.removeItem('expiry')
      return <Navbar/>
    }
    else{
      return <Page/>
    }
    }
    router = skip()
    
    return(
      <div className='App_'>
        <div className='App__Aside'>
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          {router}
        </Route>
        <Route path='/mypage' >
          {router}
        </Route>
      </Switch>
      </BrowserRouter>
      </div>
      {/* <div className='App__Form'>
          <h1>Welcome to My Note</h1>
      </div> */}
      </div>
    )
  }
}


export default App;
