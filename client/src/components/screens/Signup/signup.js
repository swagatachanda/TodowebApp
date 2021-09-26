import React from 'react';
import './signup.css'
import {mailformat} from './regex'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';





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
      this.visibleon = this.visibleon.bind(this)
      this.visibleoff = this.visibleoff.bind(this)
      this.visibleconon = this.visibleconon.bind(this)
      this.visibleconoff = this.visibleconoff.bind(this)

    };



    visibleon(){
            this.refs.pass.type='text'
            this.setState({
              visibility: true
          })
        this.refs.showpassoff.style.display="block"
      this.refs.showpasson.style.display="none"
    }

    visibleoff(){
          this.refs.pass.type='password'
          this.setState({
            visibility: false
        })
      this.refs.showpassoff.style.display="none"
    this.refs.showpasson.style.display="block"
  }

  visibleconon(){
        this.refs.conpass.type='text'
        this.setState({
          visibility: true
      })
    this.refs.showconpassoff.style.display="block"
  this.refs.showconpasson.style.display="none"
}

visibleconoff(){
      this.refs.conpass.type='password'
      this.setState({
        visibility: false
    })
  this.refs.showconpassoff.style.display="none"
this.refs.showconpasson.style.display="block"
}

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
            this.refs.errormessage.style.display='flex'
            this.setState({
                msg: "Password not a match"
            })
            setTimeout(()=>{this.refs.errormessage.style.display='none'},2000)
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
            this.refs.errormessage.style.display='flex'
            this.setState({
                msg: "Fill the details correctly"
            })
            setTimeout(()=>{this.refs.errormessage.style.display='none'},2000)
            return
        }
        var data={
        name : this.state.Name,
        email : this.state.Email,
        password : this.state.password
        }

        if(data.name===null||data.email===null||data.password===null||this.refs.conpass.value==null||this.refs.conpass.value!==data.password){
            this.refs.errormessage.style.display='flex'
            this.setState({
                msg: "Fill the details correctly"
            })
            setTimeout(()=>{this.refs.errormessage.style.display='none'},2000)
            return
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
                    window.location.assign("/")
                }
                else
                {
                    this.refs.errormessage.style.display='flex'
                    this.setState({
                        msg: back.error
                    })
                    setTimeout(()=>{this.refs.errormessage.style.display='none'},2000)
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
                            <div className='whole-input' style={{display: 'flex'}}>
                            <input type='password' ref='pass' className='input pass p1' required placeholder='' onChange={this.change}></input>
                            <div className='show-icon' style={{display: 'flex', paddingTop: '12px'}}>
                            <VisibilityOffIcon onClick={this.visibleon} ref='showpasson'/>
                            <VisibilityIcon style={{display: 'none'}} ref='showpassoff' onClick={this.visibleoff}/>
                            </div>
                            </div>
                            <div className='border'></div>
                        </div>
                    </div>
                    <div className='password'>
                        <div className='label'>
                            Confirm Password
                        </div>
                        <div className='input-field'>
                            <div className='whole-input'  style={{display: 'flex'}}>
                            <input type='password' className='input pass p2' ref='conpass' required placeholder='' onChange={this.check}></input>
                            <div className='show-icon' style={{display: 'flex', paddingTop: '12px'}}>
                            <VisibilityOffIcon onClick={this.visibleconon} ref='showconpasson'/>
                            <VisibilityIcon style={{display: 'none'}} ref='showconpassoff' onClick={this.visibleconoff}/>
                            </div>
                            </div>
                            <div className='border'></div>
                        </div>
                    </div>
                    <div className='button-container'>
                        <div className='error-message' ref='errormessage' style={{color: 'red'}}>
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
                        <div className='button login'>
                            <div className='button-label'>
                                <a href="/">Login to existing account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Signup