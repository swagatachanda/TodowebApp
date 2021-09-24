import React from 'react';
import './login.css'
import { mailformat } from '../Signup/regex';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { BackdropContext } from '../../screeneffect/backdrop/backdrop'
class Profile extends React.Component{
    static contextType = BackdropContext

    constructor(props) {
        super(props)
  
        this.state={
            Email: '',
            pass: false,
            msg: "",
            password: "",
            link:'',
            visibility: false,
            correctmsg: ""
        }
      
        this.validemail = this.validemail.bind(this)
        this.login = this.login.bind(this)
        this.change = this.change.bind(this)
        this.visibleon = this.visibleon.bind(this)
        this.visibleoff = this.visibleoff.bind(this)
        this.forgetpass = this.forgetpass.bind(this)
      };

      async forgetpass(){
        var data={
            email : this.state.Email
            }
            if(data.email==='')
            {
                this.setState({
                    msg: "Enter your email first"
                })
                setTimeout(()=>{this.refs.error.style.display='none'},2000)
                return
        }
        this.context.handleToggle()
        localStorage.setItem("code", data.email)
        const url=`/api/user/forgetpassword`
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
                if(back.status){
                    this.setState({
                        correctmsg: "Code sent to mail"
                    })
                    window.location.assign("/forgetpass")
                }
                else{
                    this.context.handleClose()
                    this.setState({
                        msg: back.error
                    })
                    setTimeout(()=>{this.refs.error.style.display='none'},2000)
                    return
                }
            })
      }

      

      visibleon(){
        
          if(!this.state.visibility){
              this.refs.pass.type='text'
              this.setState({
                visibility: true
            })
          }
          this.refs.showpassoff.style.display="block"
        this.refs.showpasson.style.display="none"
      }

      visibleoff(){
        
        if(this.state.visibility){
            this.refs.pass.type='password'
            this.setState({
              visibility: false
          })
        }
        this.refs.showpassoff.style.display="none"
      this.refs.showpasson.style.display="block"
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

      async login(term){
      
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
       
                    localStorage.setItem('data',back.data._id)
                    localStorage.setItem('logged', back.logged.islogged)
                    localStorage.setItem('expiry', back.logged.cookie.expires)
                    const url = `/note/all/${localStorage.getItem('data')}`
                    localStorage.setItem('url', url)

                    
                    
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
                            <div className='whole-input'  style={{display: 'flex'}}>
                            <input type='password' ref='pass' className='input pass p1' required placeholder='' onChange={this.change}></input>
                            <div className='show-icon' style={{display: 'flex', paddingTop: '12px'}}>
                            <VisibilityOffIcon onClick={this.visibleon} ref='showpasson'/>
                            <VisibilityIcon style={{display: 'none'}} ref='showpassoff' onClick={this.visibleoff}/>
                            </div>
                            </div>
                            <div className='border'></div>
                        </div>
                    </div>
                    <div className='button-container'>
                        <div className='error-message' style={{color: 'red'}} ref='error'>
                            {this.state.msg}
                        </div>
                        <div className="correct=message" style={{color:"green"}}>
                            {this.state.correctmsg}
                        </div>
                        <div className='button login' onClick={this.forgetpass}>
                            <div className='button-label'>
                                Forget Password?
                            </div>
                        </div>
                        <div className="button login">
                            <div className='signup'>
                            <a href="/signup" className='button-label'>
                                Create an Account
                            </a>
                            </div>
                            <div className="button-login">
                            <div className='label-pass' onClick={this.login}>
                                Login
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}


export default Profile