
import React from 'react'

const Allitem = ({props}) => {
  return (
    <div className='card'>
      <p className='item-name'><span>{props.item}</span></p>
      <p>Amount : <span className='span'>{props.numberof}</span></p>
      <p>Price : <span className='span'>${props.price}</span></p>
    </div>
  )
}

export default Allitem
