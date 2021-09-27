import React from 'react';
import './profile.css'
import EdiText from 'react-editext'

import Button from '@material-ui/core/Button'
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { BackdropContext } from '../../screeneffect/backdrop/backdrop'
import CancelIcon from '@material-ui/icons/Cancel';
import Navbar from '../../Navbar/navbar'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Sidetoggle from '../../Navbar/hamburger/hamburger'
import Backdropclose from '../../screeneffect/backdrop/backdropclose';
import Searchbar from '../../searchbar/searchbar'


class Page extends React.Component{
    static contextType = BackdropContext

    constructor(props) {
      super(props)

      this.state={
          addelement: '',
          details: [],
          id:'',
          userdetails: {},
          image: null,
          sidebaropen: false
      }
    
      this.add=this.add.bind(this)
      this.setname = this.setname.bind(this)
      this.deleteelem = this.deleteelem.bind(this)
      this.logout = this.logout.bind(this)
      this.onsave = this.onsave.bind(this)
      this.setid = this.setid.bind(this)
      this.onselectfile = this.onselectfile.bind(this)
      this.uploadpic = this.uploadpic.bind(this)
      this.triggerpopup = this.triggerpopup.bind(this)
      this.deleteobj = this.deleteobj.bind(this)
      this.removefile = this.removefile.bind(this)
      this.opensidebar = this.opensidebar.bind(this)
      this.backdropclose = this.backdropclose.bind(this)
    };

    backdropclose(){
        this.setState({
            sidebaropen: false
        })
    }

    opensidebar(){
        this.setState((prevState)=>{
          return {sidebaropen: !prevState.sidebaropen}
        })
      }

    triggerpopup(e){
        if(this.state.image!=null){
            const curr_id = e.currentTarget.id
            this.refs[`ref_${e.currentTarget.id}`].style.display='block'
            this.refs[`ref_${e.currentTarget.id}`].innerHTML = "Please upload your previous image to save changes or clear the previous file"
            setTimeout(()=>{this.refs[`ref_${curr_id}`].style.display='none'},2000)
            return
        }
        this.refs.InputField.click()
        this.setState({
            id: e.currentTarget.id
        })
    }


    removefile(e){
        this.refs.InputField.value = null
            this.refs[`${e.currentTarget.id}`].style.display = 'none'
            this.setState({
                image: null
            })
    }

    async deleteobj(e){
        if(new Date(Date.now()).toLocaleString()>=new Date(localStorage.getItem('expiry')).toLocaleString()){
            window.location.assign('/')
          }
          else{
            this.context.handleToggle()
            const url = `/note/deletephoto/${e.currentTarget.id}`
            await fetch(url,{
                method: 'DELETE',
                headers:{
                    'Content-Type': 'application/json;charset=utf-8'
                }
            })
            .then((Response)=>Response.text())
            

            var data={
                edit: 'Last updated on'
            }

            const uri = `/note/update/${this.state.id}`
            await fetch(uri,{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
            }).then((Response)=>Response.json())
            .then((back)=>{
                window.location.assign("/mypage")
            })
          }
    }


    async uploadpic(e){
        if(new Date(Date.now()).toLocaleString()>=new Date(localStorage.getItem('expiry')).toLocaleString()){
            window.location.assign('/')
          }
          else{
        try {
            this.context.handleToggle()
            const url = `/note/update/${this.state.id}`
            var data={
                edit: 'Last updated on'
            }
            await fetch(url,{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }).then((Response)=>Response.json())

            const formdata = new FormData();
            formdata.append("image", this.state.image);
            const res = await fetch(`/note/upload/${this.state.id}`, {
              method: "POST",
              body: formdata,
            })
            .then((Response)=>Response.json())
            .then((back)=>{
                window.location.assign('/mypage')
            })
    }
    catch(err){
        console.log(err)
    }
}
}


    onselectfile(event){
        this.setState({
            image: event.target.files[0]
        })
        
        if((event.target.files && event.target.files.length > 0)){
            this.refs[`${this.state.id}`].style.display = 'block'
            this.refs.filestore.style.cursor = 'pointer'
        }
    }

    setid(e){
        this.setState({
            id: e.currentTarget.id
        })
    }

    logout(){
        const url=`/api/user/logout`
        fetch(url)
        .then((Response)=>Response.json())
        .then((back)=>{
        localStorage.setItem('logged', back.logged.islogged)
        localStorage.removeItem('data')
        localStorage.removeItem('expiry')
        localStorage.removeItem('url')
        window.location.assign('/')
    })
    }

    setname(term){
        this.setState({
            addelement: term.target.value
        })
    }

    async deleteelem(e){
        if(new Date(Date.now()).toLocaleString()>=new Date(localStorage.getItem('expiry')).toLocaleString()){
            window.location.assign('/')
          }
          else{
            this.context.handleToggle()
        const url = `/note/delete/${e.currentTarget.id}`
        await fetch(url,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then((Response)=>Response.json())
        .then((data)=>{
            if(data.data==='deleted')
            {
                window.location.assign('/mypage')
            }
           
        })
    }
    }

    async add(){
        if(new Date(Date.now()).toLocaleString()>=new Date(localStorage.getItem('expiry')).toLocaleString()){
            window.location.assign('/')
          }
          else{
            this.context.handleToggle()
        const id = localStorage.getItem('data')
        var data={
            userId : id,
            content :  this.state.addelement,
            edit : 'Created on'
        }
        const url = `/note/new`
        await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body : JSON.stringify(data)
        })
        .then((Response)=>Response.json())
            .then((back)=>{
                if(back.status){
                    window.location.assign('/mypage')
                }
            })
    }
}

    async componentDidMount(){
        const url = `/note/all/${localStorage.getItem('data')}`
        if(`${localStorage.getItem('url')}`===url){
        await fetch(url)
        .then((Response)=>Response.json())
        .then((back)=>{
        if(back.status)
        {
            this.setState({
                 details: back.data
            })
            }
        })
    }
    else{
        await fetch(localStorage.getItem('url'))
        .then((Response)=>Response.json())
        .then((back)=>{
        if(back.status)
        {
            this.setState({
                 details: back.data
            })
            }
        })
        localStorage.setItem('url', url)
    }
    

        const URL = `/api/user/${localStorage.getItem('data')}`
        await fetch(URL)
        .then((Response)=>Response.json())
        .then((back)=>{
        if(back.status)
        {
            this.setState({
                 userdetails: back.data
            })
            }
        })

   
    }

    async onsave(val){
        if(new Date(Date.now()).toLocaleString()>=new Date(localStorage.getItem('expiry')).toLocaleString()){
            window.location.assign('/')
          }
          else{
            this.context.handleToggle()
        const url = `/note/update/${this.state.id}`
        var data={
            content :  val,
            edit: 'Last updated on'
        }
        await fetch(url,{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }).then((Response)=>Response.json())
        .then((data)=>{
            
            window.location.assign('/mypage')
            
           
        })
    }
    }
    
   
    render(){
        const {details} = this.state
        const {userdetails} = this.state
        let sidebar
        let backdrop

    if(this.state.sidebaropen){
       sidebar = <Sidetoggle login={userdetails.email} signup="Logout" click={this.logout} searchbar={<Searchbar/>}/>
       backdrop = <Backdropclose click={this.backdropclose} />
    }

        return(
            <div className='whole'>
                <div className='add'>
                    <Navbar login={userdetails.email} signup={<ExitToAppIcon/>} search={<Searchbar/>} drawer={this.opensidebar}/>
                    {sidebar}
                    {backdrop}
                <textarea type='text' placeholder='Add your note' onChange={this.setname}></textarea>
                <AddCircleOutlineIcon className='plus' onClick={this.add}></AddCircleOutlineIcon>
                
                </div>
                <ul>
                    {details.map((item)=>{
                        
                        return (
                            <div className='details'>
                            <div id="all-details">
                                <div className='name'>
                                    <div className='date'>
                                        <em>{item.edit} {new Date(item.dot).toLocaleString()}</em>
                                    </div>
                                    <div className='content-name'>
                                        {item.todoname}
                                    </div>
                                    <div style={{height: '20px'}}></div>
                                    <div className='content' id={item._id} onClick={this.setid} style={{whiteSpace: "pre-wrap"}}>
                                        <EdiText id={item._id} type='textarea' value={item.content} onSave={this.onsave}></EdiText>
                                    </div>
                                    <div className='image-set' style={{display: 'none'}}>
                                    <input type='file' accept='image/*' className='upload' onChange={this.onselectfile} ref='InputField'></input>
                                    </div>
                                    <div className='list'>
                                        <div id={item._id} onClick={this.setid} className="image-container" style={{display: 'flex', flexWrap: 'wrap'}}>
                                        {item.photoUrl.map((photos)=>{
                                            return(
                                                <div>
                                                <img src={photos} alt='avatar' style={{maxWidth: '180px', maxHeight:'180px'}}></img>
                                                <RemoveCircleOutlineIcon onClick={this.deleteobj} id={photos.split('/').slice(-1)[0]} style={{cursor: 'pointer'}}></RemoveCircleOutlineIcon>
                                                </div>
                                            )
                                        })}
                                        </div>
                                        <div className='addimage'>
                                        <AddPhotoAlternateIcon onClick={this.triggerpopup} style={{cursor: 'pointer'}} id={item._id}></AddPhotoAlternateIcon>
                                        </div>
                                    </div>
                                    <div className='image-upload' ref={item._id} style={{display: 'none', marginTop: '20px'}}>
                                        <CancelIcon onClick={this.removefile} ref='filestore' className='file-remove' id={item._id}></CancelIcon>
                                        <InsertPhotoIcon style={{color: 'black'}}></InsertPhotoIcon>
                                        <Button onClick={this.uploadpic}>Upload</Button>
                                    </div>
                                </div>
                            </div>
                            <div className="error" ref={`ref_${item._id}`} style={{display: 'none'}}></div>
                            <div className='modify'>
                            <DeleteIcon className='delete-item' id={item._id} onClick={this.deleteelem}></DeleteIcon>
                            </div>

                            </div>
                        )
                    })}
                </ul>
                <div style={{height: '40px'}}></div>
            </div>
        )
    }
}

export default Page