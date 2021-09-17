import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
import './footer.css'

const Footer=()=>{
    return(
        <div className='footername'>
            <div>
                <CopyrightIcon/>
                Copyright&nbsp; MyNotes2021
            </div>
        </div>
    )
}

export default Footer