import React from 'react';
import './profile.css'
import EdiText from 'react-editext'

import Button from '@material-ui/core/Button'
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import DeleteIcon from '@material-ui/icons/Delete';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';



class Page extends React.Component{
    constructor(props) {
      super(props)

      this.state={
          addelement: '',
          details: [],
          id:'',
          userdetails: {},
          image: null
      }
    
      this.add=this.add.bind(this)
      this.setname = this.setname.bind(this)
      this.deleteelem = this.deleteelem.bind(this)
      this.handleEnter=this.handleEnter.bind(this)
      this.logout = this.logout.bind(this)
      this.onsave = this.onsave.bind(this)
      this.setid = this.setid.bind(this)
      this.onselectfile = this.onselectfile.bind(this)
      this.uploadpic = this.uploadpic.bind(this)
      this.triggerpopup = this.triggerpopup.bind(this)
      this.deleteobj = this.deleteobj.bind(this)
    };

    triggerpopup(e){
        this.refs.InputField.click()
        this.setState({
            id: e.currentTarget.id
        })
        console.log(e.currentTarget.id)
    }


    async deleteobj(e){
        if(new Date(Date.now()).toLocaleString()>=new Date(localStorage.getItem('expiry')).toLocaleString()){
            window.location.assign('/')
          }
          else{

            const url = `/note/deletephoto/${e.currentTarget.id}`
            console.log(url)
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
            const url = `/note/update/${this.state.id}`
            console.log(url)
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
      
            // showBackdrop();
      
            const res = await fetch(`/note/upload/${this.state.id}`, {
              method: "POST",
              body: formdata,
            })
            .then((Response)=>Response.json())
            .then((back)=>{
                console.log(back)
                window.location.assign('/mypage')
            })
    }
    catch(err){
        console.log(err)
    }
}
}


    onselectfile(event){
        console.log(event.target.files[0])
        this.setState({
            image: event.target.files[0]
        })
        
        if(event.target.files && event.target.files.length > 0){
            this.refs.icon.style.display = 'block'
            this.refs.upload.style.display = 'block'
        }
        else{

        }
    }

    setid(e){
        console.log(e.currentTarget.id)
        this.setState({
            id: e.currentTarget.id
        })
        console.log(this.state.id)
    }

    logout(){
        const url=`/api/user/logout`
        fetch(url)
        .then((Response)=>Response.json())
        .then((back)=>{
        console.log(back)
        localStorage.setItem('logged', back.logged.islogged)
        localStorage.removeItem('data')
        localStorage.removeItem('expiry')
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
        const url = `/note/delete/${e.currentTarget.id}`
        console.log(url)
        await fetch(url,{
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        }).then((Response)=>Response.json())
        .then((data)=>{
            console.log(data)
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
        const id = localStorage.getItem('data')
        var data={
            userId : id,
            content :  this.state.addelement,
            edit : 'Created on'
        }
        console.log(data)
        const url = `/note/new`
        console.log(url)
        await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body : JSON.stringify(data)
        })
        .then((Response)=>Response.json())
            .then((back)=>{
                console.log(back)
                if(back.status){
                    window.location.assign('/mypage')
                }
            })
    }
}
    
    handleEnter(event){
        if(event.keyCode===13){
            this.add()
        }
    }


    async componentDidMount(){
        console.log(new Date(localStorage.getItem('expiry')).toLocaleString())
        console.log(new Date(Date.now()).toLocaleString())
        
        
        console.log(localStorage.getItem('logged'))
        const url = `/note/all/${localStorage.getItem('data')}`
        console.log(url)
        await fetch(url)
        .then((Response)=>Response.json())
        .then((back)=>{
        if(back.status)
        {
            this.setState({
                 details: back.data
            })
            console.log(back.data)
            }
        })

        const URL = `/api/user/${localStorage.getItem('data')}`
        console.log(URL)
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
        console.log(this.state.id)
        const url = `/note/update/${this.state.id}`
        console.log(url)
        var data={
            content :  val,
            edit: 'Last updated on'
        }
        console.log(data)
        await fetch(url,{
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }).then((Response)=>Response.json())
        .then((data)=>{
            console.log(data)
            
            window.location.assign('/mypage')
            
           
        })
    }
    }
    
    render(){
        const {details} = this.state
        const {userdetails} = this.state
        return(
            <div>
                <div className='add'>
                <input type='text' placeholder='Add your note' onChange={this.setname} onKeyUp={this.handleEnter}></input>
                <div className='plus' onClick={this.add}>+</div>
                <div className='align'>
                <div className='attr' onMouseEnter={()=>{document.querySelector('.logout').style.display='block'}} onMouseLeave={()=>{document.querySelector('.logout').style.display='none'}}>
                <div className='username'>{userdetails.email}</div>
                <div className='logout' onClick={this.logout} style={{display: 'none'}}>Logout</div>
                </div>
                </div>
                </div>
                <div className='image-upload'>
                     <InsertPhotoIcon ref='icon' style={{display: 'none'}}></InsertPhotoIcon>
                    <Button onClick={this.uploadpic} ref='upload' style={{display: 'none'}}>Upload</Button>
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
                                    <div className='content' id={item._id} onClick={this.setid}>
                                        <EdiText id={item._id} type='text' value={item.content} onSave={this.onsave}></EdiText>
                                    </div>
                                    <div className='image-set' style={{display: 'none'}}>
                                    <input type='file' accept='image/*' className='upload' onChange={this.onselectfile} ref='InputField'></input>
                                    </div>
                                    <div className='list'>
                                        <div id={item._id} onClick={this.setid}>
                                        {item.photoUrl.map((photos)=>{
                                            return(
                                                <div>
                                                <img src={photos} alt='avatar' style={{width:'85px', height:'85px'}}></img>
                                                <RemoveCircleOutlineIcon onClick={this.deleteobj} id={photos.split('/').slice(-1)[0]} style={{cursor: 'pointer'}}></RemoveCircleOutlineIcon>
                                                </div>
                                            )
                                        })}
                                        </div>
                                        <div className='addimage'>
                                        <AddPhotoAlternateIcon onClick={this.triggerpopup}style={{cursor: 'pointer'}} id={item._id}></AddPhotoAlternateIcon>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='modify'>
                            <DeleteIcon className='delete-item' id={item._id} onClick={this.deleteelem}></DeleteIcon>
                            </div>
                            </div>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default Page