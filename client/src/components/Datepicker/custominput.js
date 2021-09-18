import React from 'react'
import './custominput.css'

const CustomInput = React.forwardRef((props,ref) => {

    return (
       <button onClick={props.onClick} ref={ref} className='datepicker'>
         {props.value || props.placeholder}
       </button>
    )

})

export default CustomInput;