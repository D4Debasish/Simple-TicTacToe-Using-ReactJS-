import React from 'react'
import './Square.css'

function Square({value,onClick}) {
  return (
    <div className='square_border'  onClick = {onClick}>
     
      <h3>{value}</h3>
    </div>
  )
}

export default Square
