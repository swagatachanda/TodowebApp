import React from 'react';
import './signup.css'
import {mailformat} from './regex'




class Signup extends React.Component{

    constructor(props) {
      super(props)

      this.state={
          Name: '',
          Email: '',
          pass: false,
          msg: "",
          password: "",
          correctmsg: ""
      }
    
      this.change = this.change.bind(this)
      this.validemail = this.validemail.bind(this)
      this.check = this.check.bind(this)
      this.signup = this.signup.bind(this)
      this.setname = this.setname.bind(this)

    };

    setname(name){
        this.setState({
            Name: name.target.value
        })
    }
    
    
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

    check(term){
        if(term.target.value!==this.state.password){
            this.setState({
                msg: "Password not a match"
            })
        }
        else{
            this.setState({
                pass: true,
                msg:""
            })
        }
    }


    async signup(term) {
        if(!this.state.pass){
            this.setState({
                msg: "Fill the details correctly"
            })
            return
        }
        var data={
        name : this.state.Name,
        email : this.state.Email,
        password : this.state.password
        }
        console.log(data)
        const URL = `/api/user/new`
        await fetch(URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body : JSON.stringify(data)
        })
        .then((Response)=>Response.json())
            .then((back)=>{
                console.log(back)
                if(back.status)
                {
                    this.setState({
                        correctmsg: "Your account has been successfully created"
                    })
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
                <div className='login-container'>
                    <div className='username'>
                        <div className='label'>
                            Name
                        </div>
                        <div className='input-field'>
                            <input type='text' className='input uname' required placeholder='Enter your name' onChange={this.setname}></input>
                            <div className='border'></div>
                        </div>
                    </div>
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
                    <div className='password'>
                        <div className='label'>
                            Confirm Password
                        </div>
                        <div className='input-field'>
                            <div className='whole-input'>
                            <input type='password' className='input pass p2' required placeholder='' onChange={this.check}></input>
                            </div>
                            <div className='border'></div>
                        </div>
                    </div>
                    <div className='button-container'>
                        <div className='error-message' style={{color: 'red'}}>
                            {this.state.msg}
                        </div>
                        <div className="correct=message" style={{color:"green"}}>
                            {this.state.correctmsg}
                        </div>
                        <div className='button login' onClick={this.signup}>
                            <div className='button-label'>
                                Sign Up
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Signup