import React from 'react'

import './hamburger.css'



const Sidetoggle = props => (
    <nav className='sidedrawer'>
        <ul>
            <li>
            <div>{props.login}</div>
            </li>
            <li>
            <div onClick={props.click}>
                      {props.signup}
            </div>
            </li>
            <li>
            <div>
                      {props.searchbar}
            </div>
                </li>
        </ul>
    </nav>
)

export default Sidetoggle