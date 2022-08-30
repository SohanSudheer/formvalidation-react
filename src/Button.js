import React from 'react'

export default function Button(props) {
    const click =()=>{
        console.log("clicked")
        
    }
  return (
    <div>
        
        <button onClick={click} className='btn'>{props.text}</button>
    </div>
  )
}
