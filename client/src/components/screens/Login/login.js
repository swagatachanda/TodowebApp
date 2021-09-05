import React from 'react';
import './login.css'
import { mailformat } from '../Signup/regex';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Page from '../Profile/profile';

// import ReactDOM from 'react-dom';
// import Page from '../Profile/profile';


class Profile extends React.Component{

    constructor(props) {
        super(props)
  
        this.state={
            Email: '',
            pass: false,
            msg: "",
            password: "",
            link:''
        }
      
        this.validemail = this.validemail.bind(this)
        this.login = this.login.bind(this)
        this.change = this.change.bind(this)
  
  
      };

      

      validemail(email){
        this.setState({
            Email: email.target.value
        })
        if(mailformat.test(email.target.value)){
            email.target.style.color = 'green'
            return true
        }
        else{
            email.target.focus()
            email.target.style.color = 'red'
            return false
        }
      }

      change(term){
        this.setState({
            pass: false,
            password: term.target.value
        })
    }

      async login(term){
        // const changevalue=()=>{
        //     this.props.data.push(this.state.data)
        // }
        var data={
            email : this.state.Email,
            password : this.state.password
            }
            console.log(data)
            if(data.email==='' || data.password==='')
            {
                this.setState({
                    msg: "Fill up the fields"
                })
                return
        }
        const url=`/api/user/login`
        console.log(data,url)
        await fetch(url,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body : JSON.stringify(data)
        })
        .then((Response)=>Response.json())
            .then(async(back)=>{
                if(back.status)
                {
                    console.log(back.logged.cookie.expires)
                    // console.log(new Date(back.logged.cookie.expires).toLocaleString())
                    // new Date(item.dot).toLocaleString()
                    localStorage.setItem('data',back.data._id)
                    localStorage.setItem('logged', back.logged.islogged)
                    localStorage.setItem('expiry', back.logged.cookie.expires)
                        
                        
                        window.location.assign(`/mypage`)
                        
               
                
            }
                    
                
                else
                {
                    this.setState({
                        msg: back.error
                    })
                }
            })
      }


    render(){
        return(
            <div className='content-container'>
                {/* <BrowserRouter>
                    <Switch>
                        <Route exact path='/mypage'>
                            <Page data={this.props.data}/>
                        </Route>
                    </Switch>
                    </BrowserRouter> */}
                    {/* <Page data={this.props.data}/> */}
                <div className='login-container'>
                <div className='username'>
                        <div className='label'>
                            Email
                        </div>
                        <div className='input-field'>
                            <input type='text' className='input email' required placeholder='Enter your email' onBlur={this.validemail}></input>
                            <div className='border'></div>
                        </div>
                    </div>
                    <div className='password'>
                        <div className='label'>
                            Password
                        </div>
                        <div className='input-field'>
                            <div className='whole-input'>
                            <input type='password' className='input pass p1' required placeholder='' onChange={this.change}></input>
                            </div>
                            <div className='border'></div>
                        </div>
                    </div>
                    <div className='button-container'>
                        <div className='error-message' style={{color: 'red'}}>
                            {this.state.msg}
                        </div>
                        <div className='button login' onClick={this.login}>
                            <div className='button-label'>
                                Login
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}


export default Profile