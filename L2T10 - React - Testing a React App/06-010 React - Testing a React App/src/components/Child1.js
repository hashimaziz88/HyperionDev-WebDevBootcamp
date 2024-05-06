import React from 'react'

export default function Child1(props) {
    
  return (
    <div className='container'>
        <p>{props.name}</p>
        <button onClick={()=> props.setName("Jason")} >change</button>
        </div>
  )
}
