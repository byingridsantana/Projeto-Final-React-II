import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <p>IMPERDÍVEL</p>        
        <h1>OFERTAS</h1>
        <h1>PRA VOCÊ</h1>
        
        <button>CONFIRA</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
        
      </div>
    </div>
  )
}

export default Offers
