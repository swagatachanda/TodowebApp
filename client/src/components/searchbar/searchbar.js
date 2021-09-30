import React from 'react';
import './searchbar.css';
import SearchIcon from '@material-ui/icons/Search';
import Datepicker from '../Datepicker/datepicker'


class Searchbar extends React.Component{
  
    constructor(props) {
        super(props)
  
        this.state={
            values: ""
        }
      
        this.change = this.change.bind(this)
        this.valuechange = this.valuechange.bind(this)
        this.valuechange_year = this.valuechange_year.bind(this)
        this.searchtext = this.searchtext.bind(this)
      };


      searchtext(){
        const URL=`/note/all/${localStorage.getItem('data')}?content=${this.refs.text.value}`
        
            localStorage.setItem('url', URL)
            window.location.assign("/mypage")
      }

      valuechange(e){
       
        const URL=`/note/all/${localStorage.getItem('data')}?month=${e.currentTarget.value}`
        
            localStorage.setItem('url', URL)
            window.location.assign("/mypage")
      
        }
        valuechange_year(e){
            
            const URL=`/note/all/${localStorage.getItem('data')}?year=${e.currentTarget.value}`
            
                localStorage.setItem('url', URL)
                window.location.assign("/mypage")
        
        }

      change(e){
          if(e.currentTarget.value==='month'){
                this.refs.monthly.style.display='block'
                this.refs.yearly.style.display='none'
                this.refs.Input.style.display='none'
                this.refs.date.style.display='none'
            }
            else if(e.currentTarget.value==='year'){
                    this.refs.yearly.style.display='block'
                    this.refs.monthly.style.display='none'
                    this.refs.Input.style.display='none'
                    this.refs.date.style.display='none'
            }
            else if(e.currentTarget.value==='content'){
                this.refs.yearly.style.display='none'
                    this.refs.monthly.style.display='none'
                    this.refs.Input.style.display='flex'
                    this.refs.date.style.display='none'
            }
            else if(e.currentTarget.value==='date'){
                this.refs.yearly.style.display='none'
                this.refs.monthly.style.display='none'
                this.refs.Input.style.display='none'
                this.refs.date.style.display='flex'
                // console.log(localStorage.getItem('url'))
            }
            else if(e.currentTarget.value==="fav"){
                const URL=`/note`
            
                localStorage.setItem('url', URL)
                window.location.assign("/mypage")

            }
      }
    render(){
        return(

            <div className="Searchbar">
                <div>
                <select onChange={this.valuechange} style={{display:'none'}} ref='monthly'>
                <option value="Search" style={{display:'none'}}>Month</option>
                <option value="Jan">January</option>
                <option value="Feb">February</option>
                <option value="Mar">March</option>
                <option value="Apr">April</option>
                <option value="May">May</option>
                <option value="Jun">June</option>
                <option value="Jul">July</option>
                <option value="Aug">August</option>
                <option value="Sep">September</option>
                <option value="Oct">October</option>
                <option value="Nov">November</option>
                <option value="Dec">December</option>
                </select>
                </div>
                <div>
                <select onChange={this.valuechange_year} style={{display:'none'}} ref='yearly'>
                <option value="Search" style={{display:'none'}}>Year</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                </select>
                </div>
                <div className='search' style={{display: 'none'}} ref='Input'>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%'}}>
                <input type='text' placeholder='Enter some words' className='searchcontent' ref='text' style={{outline: 'none', border: 'none'}}></input>
                <SearchIcon style={{paddingLeft: '10px'}} className='icon' onClick={this.searchtext}/>
                </div>
                </div>
                <div style={{display: 'none', justifyContent: 'center'}} ref='date'>
                <Datepicker ref='datepicker'/>
                </div>
                <div>
                <select onChange={this.change} >
                <option value="Search" style={{display:'none'}}>Search</option>
                <option value="month">Search by Month</option>
                <option value="year">Search by Year</option>
                <option value="content">Search by Content</option>
                <option value="date">Search by Date</option>
                <option value="fav">Favourites</option>
                </select>
                </div>
            </div>
        )
    }
}

export default Searchbar