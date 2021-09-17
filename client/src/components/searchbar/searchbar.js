import React from 'react';
import './searchbar.css';


class Searchbar extends React.Component{
  
    constructor(props) {
        super(props)
  
        this.state={
            values: ""
        }
      
        this.change = this.change.bind(this)
        this.valuechange = this.valuechange.bind(this)
        this.valuechange_year = this.valuechange_year.bind(this)
      };

      valuechange(e){
       
        const URL=`/note/all/${localStorage.getItem('data')}?month=${e.currentTarget.value}`
        console.log(URL)
        
            localStorage.setItem('url', URL)
            window.location.assign("/mypage")
      
        }
        valuechange_year(e){
            
            const URL=`/note/all/${localStorage.getItem('data')}?year=${e.currentTarget.value}`
            console.log(URL)
            
                localStorage.setItem('url', URL)
                window.location.assign("/mypage")
        
        }

      change(e){
          console.log(e.currentTarget.value)
          if(e.currentTarget.value=='month'){
                this.refs.monthly.style.display='block'
                this.refs.yearly.style.display='none'
          }
          else if(e.currentTarget.value=='year'){
            this.refs.yearly.style.display='block'
            this.refs.monthly.style.display='none'
      }
        
      }
    render(){
        return(
            <div className="Searchbar">
                <select onChange={this.valuechange} style={{display:'none'}} onfocus='this.size=5;' onblur='this.size=1;' ref='monthly'>
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
                <select onChange={this.valuechange_year} style={{display:'none'}} onfocus='this.size=5;' onblur='this.size=1;' ref='yearly'>
                <option value="Search" style={{display:'none'}}>Year</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                </select>
                <select onChange={this.change}>
                <option value="Search" style={{display:'none'}}>Search</option>
                <option value="month">Search by Month</option>
                <option value="year">Search by Year</option>
                <option value="content">Search by Content</option>
                </select>
            </div>
        )
    }
}

export default Searchbar