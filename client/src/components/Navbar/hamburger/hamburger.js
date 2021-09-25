import React from 'react'

import './hamburger.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Sidetoggle = props => (
    <nav className='sidedrawer'>
        <ul>
            <li>
                <div style={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                    <div>
                        <AccountCircleIcon style={{paddingRight: '7px'}}/>
                    </div>
            <div style={{width: '80%', wordWrap: 'break-word'}}>{props.login}</div>
            </div>
            </li>
            <li>
            <div onClick={props.click} style={{display: 'flex', justifyContent: 'center', paddingBottom: '20px'}}>
                <div style={{background: '#f4a261', padding: '7px',}}>
                      {props.signup}
                </div>
            </div>
            </li>
            <li>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                      {props.searchbar}
            </div>
                </li>
        </ul>
    </nav>
)

export default Sidetoggle